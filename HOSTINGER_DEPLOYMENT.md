# Hostinger deployment: React + PHP + MySQL

This repository builds a static React/Vite website plus a same-origin PHP API. Enquiries and administrator accounts remain in Hostinger MySQL/MariaDB, outside Git and `public_html`, so a Git redeployment cannot reset submitted data.

## Required PHP extensions

- PHP 8.1 or newer (PHP 8.2 or 8.3 recommended)
- `pdo` and `pdo_mysql`
- `mbstring`, `json`, `session`, `openssl`, and `filter`

Confirm these in hPanel under **PHP Configuration**.

## 1. Existing database

The production database has already been created and the schema imported. Do **not** import [`database.sql`](database.sql) again during routine deployment. Keep that file as the non-destructive reference migration (`CREATE TABLE IF NOT EXISTS`) for a fresh installation or disaster recovery.

For a new installation only, select the empty database in phpMyAdmin, choose **Import**, select `database.sql` from this repository, and run the import once.

## 2. Private server configuration

1. Copy [`config.example.php`](config.example.php) to this exact recommended location outside the public website:

   ```text
   /home/YOUR_HOSTINGER_USER/private/thmt-config.php
   ```

2. Enter the real Hostinger database host, name, username, and password.
3. Replace `app_key` with at least 32 random characters.
4. Keep `cookie_secure` set to `true` on the HTTPS production site.
5. Set file permissions to `600` when File Manager or SSH permits it.

The deployed API automatically resolves this path. `THMT_CONFIG_PATH` may instead contain an absolute custom path. Never put the real file in Git, `public_html`, a React environment variable, or browser JavaScript.

## 3. Create the first administrator

Upload [`scripts/create-admin.php`](scripts/create-admin.php) to a private server location such as:

```text
/home/YOUR_HOSTINGER_USER/backend/scripts/create-admin.php
```

Then run it once through Hostinger SSH/Terminal:

```bash
THMT_CONFIG_PATH=/home/YOUR_HOSTINGER_USER/private/thmt-config.php php /home/YOUR_HOSTINGER_USER/backend/scripts/create-admin.php
```

Enter a username, email, and unique password of at least 12 characters. The script stores only the `password_hash()` result. Keep this CLI script outside `public_html`; it has no public URL. Remove it after account creation if it is not needed for maintenance.

## 4. Build the deployment

From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

The build creates `dist/` and automatically copies the PHP API to `dist/api/`. The included `dist/.htaccess` supports React routes such as `/admin/enquiries/123` without rewriting `/api/` requests.

## 5. Hostinger Git deployment

Connect this repository and its `main` branch in hPanel. Configure the deployment source/output so the **contents of `dist/`** become the contents of `public_html/`. If Hostinger cannot select a subdirectory, use its post-deployment command or File Manager to copy `dist/*` (including hidden `.htaccess`) into `public_html/`.

Expected public layout:

```text
public_html/
|-- index.html
|-- assets/
|-- .htaccess
`-- api/
    |-- .htaccess
    |-- bootstrap.php
    |-- auth/
    `-- enquiries/
```

Do not upload `config.example.php`, the private real config, `database.sql`, or the admin creation script into `public_html`. Ensure the domain has a valid SSL certificate and always uses HTTPS.

## 6. Production checks

### Public contact form

1. Open `https://YOUR-DOMAIN/contact` in a private browser window.
2. Submit a complete enquiry.
3. Confirm success appears only after the API responds successfully.
4. Confirm the row appears after signing in at `/admin/login`.
5. Immediately repeat the same submission and confirm it does not create a duplicate.

The public endpoint is:

```text
POST https://YOUR-DOMAIN/api/enquiries/create.php
```

### Admin security and workflow

1. Visit `/admin/enquiries` while signed out; it must redirect to `/admin/login`.
2. Sign in with the account created above.
3. Open the test enquiry, update its status, and save a private note.
4. Test search, filters, pagination, CSV export, and confirmed deletion.
5. Sign out and confirm protected API requests return HTTP 401.

Useful unauthenticated checks:

```bash
curl -i https://YOUR-DOMAIN/api/auth/session.php
curl -i https://YOUR-DOMAIN/api/enquiries/list.php
```

The session endpoint returns JSON; the enquiry list must return HTTP 401 without an authenticated administrator cookie. Admin write requests without the current `X-CSRF-Token` must return HTTP 403.

## Backups and future deployments

- Enquiries and administrator records live only in MySQL; Git deployment does not contain or overwrite them.
- Never add `DROP TABLE`, `TRUNCATE`, or production seed-reset commands to routine deployment.
- Take a database backup before every schema migration.
- Add future schema changes as explicit versioned migration files and record when each one is applied.
- Use Hostinger's automatic database backups with suitable business retention.

Future modules such as tours, destinations, bookings, posts, gallery items, and settings can reuse `api/bootstrap.php`, `require_admin()`, session authentication, CSRF checks, PDO prepared statements, and the current admin layout.
