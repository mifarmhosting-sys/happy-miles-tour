<?php

declare(strict_types=1);

// Copy this file OUTSIDE public_html, for example:
// /home/your-hostinger-user/private/thmt-config.php
// Never commit the real configuration file.
return [
    'database' => [
        'host' => 'localhost',
        'port' => 3306,
        'name' => 'YOUR_DATABASE_NAME',
        'user' => 'YOUR_DATABASE_USERNAME',
        'password' => 'YOUR_DATABASE_PASSWORD',
        'charset' => 'utf8mb4',
    ],
    'session' => [
        'name' => 'thmt_admin_session',
        'cookie_secure' => true,
        'cookie_samesite' => 'Strict',
        'lifetime' => 7200,
    ],
    // Change this to a long random value before running scripts/create-admin.php.
    'app_key' => 'replace-with-at-least-32-random-characters',
];
