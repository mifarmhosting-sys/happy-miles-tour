<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('GET');
start_secure_session();

$admin = null;
if (!empty($_SESSION['admin_id'])) {
    $statement = db()->prepare('SELECT id, username, email FROM admin_users WHERE id = :id AND is_active = 1 LIMIT 1');
    $statement->execute(['id' => (int) $_SESSION['admin_id']]);
    $row = $statement->fetch();
    if ($row) {
        $admin = ['id' => (int) $row['id'], 'username' => $row['username'], 'email' => $row['email']];
    } else {
        unset($_SESSION['admin_id']);
    }
}

json_response(['success' => true, 'authenticated' => $admin !== null, 'admin' => $admin, 'csrfToken' => csrf_token()]);
