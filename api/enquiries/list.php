<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('GET');
require_admin();

$allowedStatuses = ['new', 'contacted', 'in_progress', 'closed', 'spam'];
$search = clean_text($_GET['search'] ?? '', 160);
$status = clean_text($_GET['status'] ?? '', 30);
$sort = ($_GET['sort'] ?? 'newest') === 'oldest' ? 'oldest' : 'newest';
$page = max(1, (int) ($_GET['page'] ?? 1));
$perPage = min(100, max(10, (int) ($_GET['per_page'] ?? 20)));
$offset = ($page - 1) * $perPage;

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

$countStatement = db()->prepare('SELECT COUNT(*) FROM enquiries' . $whereSql);
$countStatement->execute($params);
$total = (int) $countStatement->fetchColumn();

$stats = db()->query("SELECT COUNT(*) AS total_count, SUM(status = 'new') AS new_count FROM enquiries")->fetch();
$direction = $sort === 'oldest' ? 'ASC' : 'DESC';
$sql = "SELECT id, name, email, phone, subject, status, source, created_at, updated_at
        FROM enquiries{$whereSql} ORDER BY created_at {$direction}, id {$direction} LIMIT :limit OFFSET :offset";
$statement = db()->prepare($sql);
foreach ($params as $key => $value) {
    $statement->bindValue(':' . $key, $value, PDO::PARAM_STR);
}
$statement->bindValue(':limit', $perPage, PDO::PARAM_INT);
$statement->bindValue(':offset', $offset, PDO::PARAM_INT);
$statement->execute();

json_response([
    'success' => true,
    'data' => $statement->fetchAll(),
    'pagination' => [
        'page' => $page,
        'perPage' => $perPage,
        'total' => $total,
        'totalPages' => max(1, (int) ceil($total / $perPage)),
    ],
    'counts' => ['total' => (int) ($stats['total_count'] ?? 0), 'new' => (int) ($stats['new_count'] ?? 0)],
]);
