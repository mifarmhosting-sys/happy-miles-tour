<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('POST');
start_secure_session();
require_csrf();
enforce_rate_limit('admin_login', 8, 900);

$body = json_body();
$identity = strtolower(clean_text($body['identity'] ?? '', 190));
$password = is_string($body['password'] ?? null) ? $body['password'] : '';

if ($identity === '' || $password === '') {
    json_response(['success' => false, 'message' => 'Email/username and password are required.'], 422);
}

$statement = db()->prepare(
    'SELECT id, username, email, password_hash
     FROM admin_users
     WHERE (LOWER(email) = :identity_email OR LOWER(username) = :identity_username) AND is_active = 1
     LIMIT 1'
);
$statement->execute(['identity_email' => $identity, 'identity_username' => $identity]);
$admin = $statement->fetch();

if (!$admin || !password_verify($password, (string) $admin['password_hash'])) {
    usleep(250000);
    json_response(['success' => false, 'message' => 'Invalid login details.'], 401);
}

if (password_needs_rehash((string) $admin['password_hash'], PASSWORD_DEFAULT)) {
    $rehash = db()->prepare('UPDATE admin_users SET password_hash = :password_hash WHERE id = :id');
    $rehash->execute(['password_hash' => password_hash($password, PASSWORD_DEFAULT), 'id' => $admin['id']]);
}

session_regenerate_id(true);
$_SESSION['admin_id'] = (int) $admin['id'];
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
$_SESSION['last_activity'] = time();

json_response([
    'success' => true,
    'admin' => ['id' => (int) $admin['id'], 'username' => $admin['username'], 'email' => $admin['email']],
    'csrfToken' => $_SESSION['csrf_token'],
]);
