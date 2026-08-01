-- Happy Miles Tourism enquiry management schema
-- Import once into the Hostinger MySQL/MariaDB database selected for this site.

SET NAMES utf8mb4;
SET time_zone = '+00:00';

CREATE TABLE IF NOT EXISTS admin_users (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(190) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY admin_users_username_unique (username),
    UNIQUE KEY admin_users_email_unique (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS enquiries (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    subject VARCHAR(160) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'contacted', 'in_progress', 'closed', 'spam') NOT NULL DEFAULT 'new',
    admin_notes TEXT NULL,
    source VARCHAR(80) NOT NULL DEFAULT 'website_contact',
    submission_hash CHAR(64) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY enquiries_submission_hash_unique (submission_hash),
    KEY enquiries_status_created_idx (status, created_at),
    KEY enquiries_created_idx (created_at),
    KEY enquiries_email_idx (email),
    KEY enquiries_phone_idx (phone),
    FULLTEXT KEY enquiries_search_fulltext (name, email, phone, subject, message)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS rate_limits (
    identifier CHAR(64) NOT NULL,
    action VARCHAR(60) NOT NULL,
    attempts SMALLINT UNSIGNED NOT NULL DEFAULT 1,
    window_started DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (identifier, action),
    KEY rate_limits_updated_idx (updated_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
