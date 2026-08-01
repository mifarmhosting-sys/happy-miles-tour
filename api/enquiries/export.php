<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('GET');
require_admin();

$allowedStatuses = ['new', 'contacted', 'in_progress', 'closed', 'spam'];
$search = clean_text($_GET['search'] ?? '', 160);
$status = clean_text($_GET['status'] ?? '', 30);
$sort = ($_GET['sort'] ?? 'newest') === 'oldest' ? 'oldest' : 'newest';
$where = [];
$params = [];
if ($search !== '') {
    $where[] = '(name LIKE :search_name OR email LIKE :search_email OR phone LIKE :search_phone OR subject LIKE :search_subject)';
    $searchTerm = '%' . str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], $search) . '%';
    $params['search_name'] = $searchTerm;
    $params['search_email'] = $searchTerm;
    $params['search_phone'] = $searchTerm;
    $params['search_subject'] = $searchTerm;
}
if (in_array($status, $allowedStatuses, true)) {
    $where[] = 'status = :status';
    $params['status'] = $status;
}
$whereSql = $where === [] ? '' : ' WHERE ' . implode(' AND ', $where);
$direction = $sort === 'oldest' ? 'ASC' : 'DESC';
$statement = db()->prepare(
    "SELECT id, name, email, phone, subject, message, status, admin_notes, source, created_at, updated_at
     FROM enquiries{$whereSql} ORDER BY created_at {$direction}, id {$direction}"
);
$statement->execute($params);

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="enquiries-' . gmdate('Y-m-d') . '.csv"');
header('Cache-Control: no-store');
$output = fopen('php://output', 'wb');
fwrite($output, "\xEF\xBB\xBF");
fputcsv($output, ['ID', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Admin Notes', 'Source', 'Created At', 'Updated At']);
while ($row = $statement->fetch()) {
    $safeRow = array_map(static function (mixed $value): string {
        $text = (string) ($value ?? '');
        return preg_match('/^[=+\-@]/', $text) ? "'" . $text : $text;
    }, array_values($row));
    fputcsv($output, $safeRow);
}
fclose($output);
exit;
