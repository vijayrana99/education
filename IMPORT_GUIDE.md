# Postman Collection - Import Instructions

## Fixed Files

The correct Postman collection file is:
```
School-CMS-API.postman_collection.json
```

## How to Import

### Option 1: Direct Import (Recommended)

1. **Open Postman Desktop** or **Postman Web Browser**
2. Click the **Import** button (top left, or press `Ctrl+O` / `Cmd+O`)
3. Select the file: `School-CMS-API.postman_collection.json`
4. Click **Import**

The collection will appear in your workspace with all folders organized.

### Option 2: Drag and Drop

1. **Open Postman**
2. **Drag and drop** the `School-CMS-API.postman_collection.json` file into Postman

## Import Environment

1. Click the **gear icon** (Manage Environments) in the top right
2. Click **Import**
3. Select: `postman-environment.json`
4. Select **"School CMS - Local"** from the environment dropdown (top right)

## Quick Start

1. **Start the server**:
   ```bash
   npm run dev
   ```

2. **In Postman**, go to the **Authentication** folder

3. **Run "Login"** request:
   ```
   Email: admin@school.edu
   Password: admin123
   ```

4. **The token is automatically saved** to your environment!

5. **Run any other request** - the token is automatically included

## Collection Contents

```
School CMS API
├── Health (1 endpoint)
├── Authentication (2 endpoints) 
│   ├── Login (auto-saves token ✓)
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

Total: 44 API endpoints
```

## Troubleshooting

### "Incorrect format" error

**Solution**: Use the file named `School-CMS-API.postman_collection.json` (NOT `school-cms-api.postman_collection.json`)

The old file had formatting issues. Use the new file.

### Token not working

**Solution**: Run the **Login** request again. The test script automatically saves the token.

### Server not responding

**Solution**: Make sure the server is running:
```bash
npm run dev
```

Then test: `curl http://localhost:3000/health`

## Files in This Directory

| File | Use | Status |
|------|-----|--------|
| `School-CMS-API.postman_collection.json` | Import this one | ✓ Ready |
| `postman-environment.json` | Import for environment variables | ✓ Ready |
| `README_POSTMAN.md` | Full documentation | ✓ Ready |
| `POSTMAN_COLLECTION.md` | Old documentation | - Backup |
| `POSTMAN_COLLECTION_README.md` | Old documentation | - Backup |
| `old-collection-backup.json` | Old collection (broken) | - Backup |
| `school-cms-api.postman_collection.js` | Old collection (wrong name) | - Delete |

## Need More Help?

Check the README: `README_POSTMAN.md`
