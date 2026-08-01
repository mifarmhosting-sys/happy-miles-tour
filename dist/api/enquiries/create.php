<?php

declare(strict_types=1);

require dirname(__DIR__) . '/bootstrap.php';
require_method('POST');
enforce_rate_limit('enquiry_create', 5, 900);

$body = json_body();
if (clean_text($body['website'] ?? '', 200) !== '') {
    // Return a normal success response so automated spam does not learn the trap.
    json_response(['success' => true, 'message' => 'Thank you. Your enquiry has been received.'], 201);
}

$name = clean_text($body['name'] ?? '', 120);
$email = strtolower(clean_text($body['email'] ?? '', 254));
$phone = clean_text($body['phone'] ?? '', 30);
$subject = clean_text($body['subject'] ?? '', 160);
$message = clean_text($body['message'] ?? '', 5000);

$errors = [];
if (mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your full name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}
if (!preg_match('/^[0-9+()\-\s]{7,30}$/', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if ($subject === '') {
    $errors['subject'] = 'Please select or enter a subject.';
}
if (mb_strlen($message) < 2) {
    $errors['message'] = 'Please enter your message.';
}
if ($errors !== []) {
    json_response(['success' => false, 'message' => 'Please correct the highlighted fields.', 'errors' => $errors], 422);
}

$config = load_config();
$bucket = (string) floor(time() / 600);
$submissionHash = hash_hmac(
    'sha256',
    implode('|', [$email, preg_replace('/\D+/', '', $phone), mb_strtolower($message), $bucket]),
    (string) $config['app_key']
);

$statement = db()->prepare(
    'INSERT INTO enquiries (name, email, phone, subject, message, status, source, submission_hash)
     VALUES (:name, :email, :phone, :subject, :message, :status, :source, :submission_hash)'
);
try {
    $statement->execute([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject,
        'message' => $message,
        'status' => 'new',
        'source' => 'website_contact',
        'submission_hash' => $submissionHash,
    ]);
} catch (PDOException $error) {
    if ((string) $error->getCode() === '23000') {
        json_response(['success' => true, 'message' => 'Your enquiry has already been received.'], 200);
    }
    throw $error;
}

json_response(['success' => true, 'message' => 'Thank you. Your enquiry has been received.'], 201);
