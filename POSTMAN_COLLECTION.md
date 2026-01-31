# School CMS - Complete Postman Collection

A comprehensive Postman collection for testing the School CMS API with all endpoints organized into folders.

## Files Created

1. **school-cms-api.postman_collection.json** - Main Postman collection
2. **postman-environment.json** - Environment configuration for local development
3. **POSTMAN_COLLECTION_README.md** - Detailed documentation

## Quick Start

### Step 1: Import Collection

1. Open Postman
2. Click **Import** (or Ctrl+O / Cmd+O)
3. Select `school-cms-api.postman_collection.json`
4. Click **Import**

### Step 2: Import Environment

1. Click the **Manage Environments** icon (gear icon) in the top right
2. Click **Import**
3. Select `postman-environment.json`
4. Select the "School CMS - Local" environment from the dropdown

### Step 3: Start Testing

1. Ensure the API server is running:
   ```bash
   cd /home/vijay/projects/school
   npm run dev
   ```

2. In Postman, navigate to **Authentication** folder
3. Run the **Login** request
4. The token will be automatically saved to your environment variables
5. Run any other requests - they will use the saved token automatically!

## Collection Structure

```
School CMS API
├── Health
│   └── Health Check
├── Authentication
│   ├── Login (auto-saves token)
│   └── Get Current User
├── Pages (5 endpoints)
├── News Categories (5 endpoints)
├── News (5 endpoints)
├── Events (5 endpoints)
├── Staff (5 endpoints)
├── Gallery (6 endpoints)
├── Menus (4 endpoints)
├── Settings (2 endpoints)
└── Contact (4 endpoints)

Total: 42 API endpoints
```

## Login Credentials

```
Email: admin@school.edu
Password: admin123
```

## Variables

| Variable | Description |
|----------|-------------|
| `baseUrl` | API base URL (http://localhost:3000/api/v1) |
| `token` | JWT authentication token (auto-set after login) |

## Features

✅ **Auto-token save**: Login request automatically saves JWT token to environment
✅ **Organized folders**: All endpoints grouped by module
✅ **Pre-filled examples**: Sample request bodies included
✅ **Query parameters**: Pagination and filtering documented
✅ **Auth headers**: Authorization header pre-configured for protected routes

## Testing Workflow

### Create Content Workflow

1. **Login** → Get JWT token
2. **Create News Category** → Set up category (e.g., "Admissions")
3. **Create News** → Use category ID in request
4. **Create Page** → Add static content
5. **Create Event** → Add upcoming event
6. **Create Staff** → Add team members
7. **Create Gallery Album** → Add photo album
8. **Create Menu** → Add navigation items
9. **Update Settings** → Configure site-wide settings

### Verify Content Workflow

1. **List Pages** → Check pages appear
2. **List News** → Verify news with category
3. **List Events** → Check events
4. **List Staff** → Verify staff members
5. **Get Album by Slug** → Check gallery

## API Response Format

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
    "message": "Invalid input data",
    "details": [...]
  }
}
```

## HTTP Status Codes

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

## Common Error Messages

| Code | Message | Cause |
|------|----------|-------|
| VALIDATION_ERROR | Invalid input data | Request body validation failed |
| UNAUTHORIZED | Missing or invalid token | No auth header or expired token |
| FORBIDDEN | Insufficient permissions | User lacks required role |
| NOT_FOUND | Resource not found | ID or slug doesn't exist |
| CONFLICT | Record already exists | Duplicate slug or email |

## Troubleshooting

### "Invalid or expired token"
1. Run the **Login** request again
2. Token will be auto-saved to environment

### "Category not found"
1. Ensure you created a category first
2. Use correct category ID from response

### "Slug already exists"
1. Change the slug to a unique value
2. Slugs must be unique per model

### "Page not found"
1. Check if the ID is correct
2. Ensure the page exists and is published

## Customization

### Change Base URL

1. Click the collection name at the top
2. Go to **Variables** tab
3. Update `baseUrl` to your production URL
4. Click **Save**

### Add Auto-Save Token Test Script

Already included in the Login request! The test script automatically:
- Parses the response
- Saves the token to collection variables
- Runs validation tests

### Use Different Credentials

1. Go to **Authentication** folder
2. Update email and password in the **Login** request body
3. Send request
4. New token will be saved

## Additional Resources

- **Postman Documentation**: https://learning.postman.com/
- **API Documentation**: POSTMAN_COLLECTION_README.md
- **Project README**: README.md (project root)

## Need Help?

1. Check server logs: `tail -f /tmp/server.log`
2. Verify server is running: `curl http://localhost:3000/health`
3. Check environment variables: View Variables icon in Postman
4. Verify request body format: Use the pre-filled examples as reference
