<?php

declare(strict_types=1);

const THMT_API_ROOT = __DIR__;

function load_config(): array
{
    static $config;
    if (is_array($config)) {
        return $config;
    }

    $path = getenv('THMT_CONFIG_PATH');
    if (!$path) {
        $path = dirname(__DIR__, 2) . '/private/thmt-config.php';
    }
    if (!is_file($path)) {
        throw new RuntimeException('Server configuration is unavailable.');
    }

    $loaded = require $path;
    if (!is_array($loaded)) {
        throw new RuntimeException('Server configuration is invalid.');
    }
    $config = $loaded;
    return $config;
}

function db(): PDO
{
    static $pdo;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $database = load_config()['database'] ?? [];
    foreach (['host', 'name', 'user', 'password'] as $required) {
        if (!isset($database[$required]) || $database[$required] === '') {
            throw new RuntimeException('Database configuration is incomplete.');
        }
    }

    $charset = $database['charset'] ?? 'utf8mb4';
    $port = (int) ($database['port'] ?? 3306);
    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=%s',
        $database['host'],
        $port,
        $database['name'],
        $charset
    );
    $pdo = new PDO($dsn, $database['user'], $database['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES {$charset} COLLATE utf8mb4_unicode_ci",
    ]);
    $pdo->exec("SET time_zone = '+00:00'");
    return $pdo;
}

function start_secure_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    $settings = load_config()['session'] ?? [];
    $lifetime = (int) ($settings['lifetime'] ?? 7200);
    session_name($settings['name'] ?? 'thmt_admin_session');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => (bool) ($settings['cookie_secure'] ?? true),
        'httponly' => true,
        'samesite' => $settings['cookie_samesite'] ?? 'Strict',
    ]);
    ini_set('session.use_strict_mode', '1');
    ini_set('session.use_only_cookies', '1');
    ini_set('session.cookie_httponly', '1');
    ini_set('session.gc_maxlifetime', (string) $lifetime);
    session_start();

    if (isset($_SESSION['last_activity']) && time() - (int) $_SESSION['last_activity'] > $lifetime) {
        $_SESSION = [];
        session_regenerate_id(true);
    }
    $_SESSION['last_activity'] = time();
}

function security_headers(): void
{
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('Referrer-Policy: same-origin');
    header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'");
    header('Cache-Control: no-store, private');
}

function json_response(array $payload, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function require_method(string ...$allowed): void
{
    $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
    if (!in_array($method, $allowed, true)) {
        header('Allow: ' . implode(', ', $allowed));
        json_response(['success' => false, 'message' => 'Method not allowed.'], 405);
    }
}

function json_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) > 20000) {
        json_response(['success' => false, 'message' => 'Invalid request body.'], 400);
    }
    $body = json_decode($raw ?: '{}', true);
    if (!is_array($body)) {
        json_response(['success' => false, 'message' => 'Invalid JSON request.'], 400);
    }
    return $body;
}

function csrf_token(): string
{
    start_secure_session();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return (string) $_SESSION['csrf_token'];
}

function require_csrf(): void
{
    $provided = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if ($provided === '' || !hash_equals(csrf_token(), $provided)) {
        json_response(['success' => false, 'message' => 'Invalid security token. Refresh and try again.'], 403);
    }
}

function require_admin(): array
{
    start_secure_session();
    if (empty($_SESSION['admin_id'])) {
        json_response(['success' => false, 'message' => 'Authentication required.'], 401);
    }

    $statement = db()->prepare('SELECT id, username, email FROM admin_users WHERE id = :id AND is_active = 1 LIMIT 1');
    $statement->execute(['id' => (int) $_SESSION['admin_id']]);
    $admin = $statement->fetch();
    if (!$admin) {
        $_SESSION = [];
        json_response(['success' => false, 'message' => 'Administrator access is no longer active.'], 401);
    }
    return $admin;
}

function client_ip(): string
{
    return substr((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 0, 45);
}

function enforce_rate_limit(string $action, int $maxAttempts, int $windowSeconds): void
{
    $config = load_config();
    $identifier = hash_hmac('sha256', $action . '|' . client_ip(), (string) ($config['app_key'] ?? ''));
    $pdo = db();
    $pdo->beginTransaction();
    try {
        $select = $pdo->prepare('SELECT attempts, window_started FROM rate_limits WHERE identifier = :identifier AND action = :action FOR UPDATE');
        $select->execute(['identifier' => $identifier, 'action' => $action]);
        $row = $select->fetch();
        $now = time();

        if (!$row) {
            $insert = $pdo->prepare('INSERT INTO rate_limits (identifier, action, attempts, window_started) VALUES (:identifier, :action, 1, NOW())');
            $insert->execute(['identifier' => $identifier, 'action' => $action]);
        } else {
            $started = strtotime((string) $row['window_started']);
            if ($started === false || $now - $started >= $windowSeconds) {
                $reset = $pdo->prepare('UPDATE rate_limits SET attempts = 1, window_started = NOW() WHERE identifier = :identifier AND action = :action');
                $reset->execute(['identifier' => $identifier, 'action' => $action]);
            } elseif ((int) $row['attempts'] >= $maxAttempts) {
                $pdo->rollBack();
                json_response(['success' => false, 'message' => 'Too many attempts. Please wait and try again.'], 429);
            } else {
                $update = $pdo->prepare('UPDATE rate_limits SET attempts = attempts + 1 WHERE identifier = :identifier AND action = :action');
                $update->execute(['identifier' => $identifier, 'action' => $action]);
            }
        }
        $pdo->commit();
    } catch (Throwable $error) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        throw $error;
    }
}

function clean_text(mixed $value, int $maxLength): string
{
    $text = trim(is_string($value) ? $value : '');
    return mb_substr($text, 0, $maxLength);
}

security_headers();

set_exception_handler(static function (Throwable $error): never {
    error_log(sprintf('[THMT API] %s in %s:%d', $error->getMessage(), $error->getFile(), $error->getLine()));
    json_response(['success' => false, 'message' => 'A server error occurred. Please try again later.'], 500);
});
