<?php

declare(strict_types=1);

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

$configPath = getenv('THMT_CONFIG_PATH');
if (!$configPath || !is_file($configPath)) {
    fwrite(STDERR, "Set THMT_CONFIG_PATH to your private configuration file.\n");
    exit(1);
}
$config = require $configPath;
$database = $config['database'] ?? [];
$dsn = sprintf(
    'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
    $database['host'] ?? 'localhost',
    (int) ($database['port'] ?? 3306),
    $database['name'] ?? ''
);
$pdo = new PDO($dsn, $database['user'] ?? '', $database['password'] ?? '', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false,
]);

$username = trim((string) readline('Admin username: '));
$email = strtolower(trim((string) readline('Admin email: ')));
fwrite(STDOUT, 'Admin password: ');
$password = trim((string) fgets(STDIN));

if (!preg_match('/^[A-Za-z0-9._-]{3,60}$/', $username)) {
    fwrite(STDERR, "Username must be 3-60 characters using letters, numbers, dot, underscore or hyphen.\n");
    exit(1);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 12) {
    fwrite(STDERR, "Use a valid email and a password of at least 12 characters.\n");
    exit(1);
}

$statement = $pdo->prepare(
    'INSERT INTO admin_users (username, email, password_hash) VALUES (:username, :email, :password_hash)'
);
$statement->execute([
    'username' => $username,
    'email' => $email,
    'password_hash' => password_hash($password, PASSWORD_DEFAULT),
]);
fwrite(STDOUT, "Administrator created successfully.\n");
