# School CMS - Postman Collection

Complete Postman collection for testing School CMS API.

## Files

| File | Description |
|------|-------------|
| `School-CMS-API.postman_collection.json` | Postman collection (v2.1 format) |
| `postman-environment.json` | Environment variables |

## Import Steps

### 1. Import Collection

1. Open Postman
2. Click **Import** (top left, Ctrl+O / Cmd+O)
3. Select `School-CMS-API.postman_collection.json`
4. Click **Import**

### 2. Import Environment

1. Click **Manage Environments** (gear icon, top right)
2. Click **Import**
3. Select `postman-environment.json`
4. Select **"School CMS - Local"** from dropdown

## Setup

1. Start the API server:
   ```bash
   npm run dev
   ```

2. In Postman, go to **Authentication** folder

3. Run **Login** request with these credentials:
   ```
   Email: admin@school.edu
   Password: admin123
   ```

4. The token is **automatically saved** to your environment variables!

5. Run any other requests - the `{{token}}` variable will be automatically used in Authorization headers.

## Collection Structure

```
School CMS API (42 endpoints)
├── Health (1)
├── Authentication (2)
├── Pages (5)
├── News Categories (5)
├── News (5)
├── Events (5)
├── Staff (5)
├── Gallery (6)
├── Menus (4)
├── Settings (2)
└── Contact (4)
```

## Variables

| Variable | Value | Description |
|----------|--------|-------------|
| `baseUrl` | `http://localhost:3000/api/v1` | API base URL |
| `token` | `(auto-set)` | JWT authentication token |

## Features

✅ Auto-save token after login
✅ Organized by module
✅ Pre-filled examples
✅ Auth headers pre-configured
✅ Query parameters documented

## Quick Test

1. **Health Check** → Verify server running
2. **Login** → Get JWT token (auto-saved)
3. **Create Category** → Add news category
4. **Create News** → Use category ID
5. **List News** → Verify content

## Response Format

### Success
```json
{
  "data": { ... },
  "meta": {
    "total": 100,
    "limit": 10,
    "offset": 0
  }
}
```

### Error
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data"
  }
}
```

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Server Error |
