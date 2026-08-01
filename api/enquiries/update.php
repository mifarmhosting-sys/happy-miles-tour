<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('POST', 'PATCH');
$admin = require_admin();
require_csrf();

$body = json_body();
$id = filter_var($body['id'] ?? null, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
if (!$id) {
    json_response(['success' => false, 'message' => 'A valid enquiry ID is required.'], 422);
}

$allowedStatuses = ['new', 'contacted', 'in_progress', 'closed', 'spam'];
$updates = [];
$params = ['id' => $id];
if (array_key_exists('status', $body)) {
    $status = clean_text($body['status'], 30);
    if (!in_array($status, $allowedStatuses, true)) {
        json_response(['success' => false, 'message' => 'Invalid enquiry status.'], 422);
    }
    $updates[] = 'status = :status';
    $params['status'] = $status;
}
if (array_key_exists('admin_notes', $body)) {
    $notes = clean_text($body['admin_notes'], 10000);
    $updates[] = 'admin_notes = :admin_notes';
    $params['admin_notes'] = $notes === '' ? null : $notes;
}
if ($updates === []) {
    json_response(['success' => false, 'message' => 'No supported changes were provided.'], 422);
}

$updates[] = 'updated_at = NOW()';
$statement = db()->prepare('UPDATE enquiries SET ' . implode(', ', $updates) . ' WHERE id = :id');
$statement->execute($params);
if ($statement->rowCount() === 0) {
    $exists = db()->prepare('SELECT id FROM enquiries WHERE id = :id');
    $exists->execute(['id' => $id]);
    if (!$exists->fetch()) {
        json_response(['success' => false, 'message' => 'Enquiry not found.'], 404);
    }
}

error_log(sprintf('[THMT ADMIN] Enquiry %d updated by admin %d', $id, $admin['id']));
json_response(['success' => true, 'message' => 'Enquiry updated.']);
