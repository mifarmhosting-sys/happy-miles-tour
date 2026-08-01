<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('POST', 'DELETE');
$admin = require_admin();
require_csrf();

$body = json_body();
$id = filter_var($body['id'] ?? null, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
if (!$id) {
    json_response(['success' => false, 'message' => 'A valid enquiry ID is required.'], 422);
}

$statement = db()->prepare('DELETE FROM enquiries WHERE id = :id');
$statement->execute(['id' => $id]);
if ($statement->rowCount() === 0) {
    json_response(['success' => false, 'message' => 'Enquiry not found.'], 404);
}
error_log(sprintf('[THMT ADMIN] Enquiry %d deleted by admin %d', $id, $admin['id']));
json_response(['success' => true, 'message' => 'Enquiry deleted.']);
