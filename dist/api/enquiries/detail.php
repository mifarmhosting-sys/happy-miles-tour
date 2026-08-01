<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('GET');
require_admin();

$id = filter_var($_GET['id'] ?? null, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
if (!$id) {
    json_response(['success' => false, 'message' => 'A valid enquiry ID is required.'], 422);
}

$statement = db()->prepare(
    'SELECT id, name, email, phone, subject, message, status, admin_notes, source, created_at, updated_at
     FROM enquiries WHERE id = :id LIMIT 1'
);
$statement->execute(['id' => $id]);
$enquiry = $statement->fetch();
if (!$enquiry) {
    json_response(['success' => false, 'message' => 'Enquiry not found.'], 404);
}
json_response(['success' => true, 'data' => $enquiry]);
