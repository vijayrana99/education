# School CMS API - Postman Collection

Complete API collection for School CMS - Content Management System with Pages, News, Events, Staff, Gallery, Menus, Settings, and Contact modules.

## Import Instructions

1. Open Postman
2. Click **Import** (or press Ctrl+O / Cmd+O)
3. Select the file `school-cms-api.postman_collection.json`
4. The collection will be imported with all folders and requests

## Variables

The collection includes two variables:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `baseUrl` | `http://localhost:3000/api/v1` | Base URL for all API requests |
| `token` | `` (empty) | JWT authentication token (auto-populated after login) |

## Setup

1. Ensure your API server is running:
   ```bash
   npm run dev
   ```

2. In Postman, go to the **Authentication** folder
3. Run the **Login** request
4. Copy the `token` value from the response
5. Update the `token` variable in the collection:
   - Click the collection name at the top
   - Go to **Variables** tab
   - Paste your token in the `token` field
   - Click **Save**

**Tip**: You can also set up a test script in the Login request to automatically save the token:
```javascript
var jsonData = pm.response.json();
pm.collectionVariables.set("token", jsonData.token);
```

## Request Folders

### 1. Health
- `Health Check` - Check if API server is running

### 2. Authentication
- `Login` - Authenticate and get JWT token
- `Get Current User` - Get current authenticated user information

### 3. Pages
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/pages` | No |
| GET | `/pages/:id` | No |
| POST | `/admin/pages` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/pages/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/pages/:id` | Yes (EDITOR/ADMIN) |

### 4. News Categories
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/news/categories` | No |
| GET | `/news/categories/:slug` | No |
| POST | `/admin/news/categories` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/news/categories/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/news/categories/:id` | Yes (EDITOR/ADMIN) |

### 5. News
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/news` | No |
| GET | `/news/:slug` | No |
| POST | `/admin/news` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/news/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/news/:id` | Yes (EDITOR/ADMIN) |

**Query Parameters:**
- `limit` - Number of items per page (default: 10)
- `offset` - Number of items to skip (default: 0)
- `categoryId` - Filter by category ID
- `status` - Filter by status (DRAFT, PUBLISHED, ARCHIVED)

### 6. Events
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/events` | No |
| GET | `/events/:slug` | No |
| POST | `/admin/events` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/events/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/events/:id` | Yes (EDITOR/ADMIN) |

**Query Parameters:**
- `limit` - Number of items per page (default: 10)
- `offset` - Number of items to skip (default: 0)
- `startDateFrom` - Filter events starting from this date
- `startDateTo` - Filter events ending before this date
- `status` - Filter by status (DRAFT, PUBLISHED, ARCHIVED)

### 7. Staff
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/staff` | No |
| GET | `/staff/:id` | No |
| POST | `/admin/staff` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/staff/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/staff/:id` | Yes (EDITOR/ADMIN) |

**Query Parameters:**
- `limit` - Number of items per page (default: 20)
- `offset` - Number of items to skip (default: 0)
- `department` - Filter by department name
- `status` - Filter by status (DRAFT, PUBLISHED, ARCHIVED)

### 8. Gallery
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/gallery/albums` | No |
| GET | `/gallery/albums/:slug` | No |
| POST | `/admin/gallery/albums` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/gallery/albums/:id` | Yes (EDITOR/ADMIN) |
| POST | `/admin/gallery/albums/:albumId/images` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/gallery/images/:id` | Yes (EDITOR/ADMIN) |

### 9. Menus
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/menus` | No |
| POST | `/admin/menus` | Yes (EDITOR/ADMIN) |
| PUT | `/admin/menus/:id` | Yes (EDITOR/ADMIN) |
| DELETE | `/admin/menus/:id` | Yes (EDITOR/ADMIN) |

**Query Parameters:**
- `location` - Filter by location (HEADER or FOOTER)

### 10. Settings
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| GET | `/settings` | No |
| PUT | `/admin/settings` | Yes (EDITOR/ADMIN) |

### 11. Contact
| Method | Endpoint | Auth Required |
|--------|-----------|---------------|
| POST | `/contact` | No (public) |
| GET | `/admin/contact` | Yes |
| GET | `/admin/contact/:id` | Yes |
| PUT | `/admin/contact/:id` | Yes (EDITOR/ADMIN) |

**Query Parameters for List:**
- `limit` - Number of items per page (default: 10)
- `offset` - Number of items to skip (default: 0)
- `status` - Filter by status (NEW, READ, RESPONDED)

## Common Response Format

### Success Response
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

### Error Response
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
| 204 | No Content (successful delete) |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (missing/invalid token) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not Found |
| 409 | Conflict (duplicate slug, email) |
| 500 | Internal Server Error |

## Default Login Credentials

```
Email: admin@school.edu
Password: admin123
```

## Quick Test Sequence

1. **Health Check** - Verify server is running
2. **Login** - Get authentication token
3. **Create News Category** - Set up a category
4. **Create News** - Add news article using category ID
5. **List News** - Verify news appears
6. **Create Page** - Add a static page
7. **Create Staff** - Add staff member
8. **Create Event** - Add an event
9. **Create Menu** - Add navigation menu
10. **Update Settings** - Configure site settings

## Tips

1. **Auto-save Token**: Add this test script to the Login request Tests tab:
   ```javascript
   var jsonData = pm.response.json();
   pm.collectionVariables.set("token", jsonData.token);
   pm.test("Token saved to collection variables", true);
   ```

2. **ID Replacement**: When creating resources, copy the `id` from response and replace `:id` in subsequent requests.

3. **Validation Errors**: Check the `details` array in error responses to see specific validation failures.

4. **Pagination**: Use `limit` and `offset` parameters for paginated lists.

5. **Filtering**: Use query parameters like `status=PUBLISHED` or `department=Science` to filter results.
