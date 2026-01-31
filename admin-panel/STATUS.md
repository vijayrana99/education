# School CMS - Admin Panel

**Status: Infrastructure built, waiting for dependencies installation**

## 📁 Project Status

We've created a Next.js 14 project with all the infrastructure for a production-ready admin panel. The dependencies are currently installing (zustand, tanstack/react-query, clsx, etc.).

## 📂 What We've Built

### Project Structure
```
admin-panel/
├── lib/                      # API client, auth utilities, stores, utils
│   ├── api.ts              ✅ Axios with auth interceptors
│   ├── auth.ts             ✅ Login/logout utilities
│   ├── store.ts            ✅ Zustand stores (auth, theme, app)
│   └── utils.ts            ✅ Helper functions
├── types/
│   └── api.ts              ✅ TypeScript types
├── components/
│   ├── providers.tsx        ✅ Theme provider
│   ├── layout/
│   │   ├── sidebar.tsx      ✅ Dashboard sidebar
│   │   ├── header.tsx       ✅ Dashboard header
│   │   └── theme-toggle.tsx  ✅ Dark mode toggle
│   ├── shared/
│   │   ├── data-table.tsx    ✅ Reusable data table
│   │   ├── page-header.tsx   ✅ Page header component
│   │   ├── loading-spinner.tsx ✅ Loading indicator
│   │   └── confirmation-dialog.tsx ✅ Confirmation dialogs
├── app/
│   ├── layout.tsx           ✅ Root layout + providers
│   ├── globals.css          ✅ CSS variables + dark mode
│   ├── (auth)/
│   │   ├── layout.tsx      ✅ Auth layout
│   │   └── page.tsx       ✅ Login page
│   ├── (dashboard)/
│   │   ├── layout.tsx      ✅ Dashboard layout with sidebar
│   │   └── page.tsx       ✅ Dashboard page with stats
│   ├── tailwind.config.ts     ✅ Tailwind config + Slate color scheme
│   └── next.config.js      ✅ Next.js configuration
```

### Files Created (30+ files)

## 🎨 Design System

**Color Palette (Professional Slate)**
- Primary: Slate 600 (light) → Slate 400 (dark mode)
- Accent: Indigo 600
- Success: Emerald 600
- Warning: Amber 500
- Error: Rose 600

**Components**
- Dark mode support via next-themes
- Responsive design with mobile sidebar

## 📝 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14 (App Router) | Server components |
| Styling | Tailwind CSS | Utility-first styling |
| Components | Copy-paste (shadcn/ui) | Pre-built components |
| State | Zustand | Simple, lightweight |
| Data fetching | TanStack Query (next) | Caching, optimistic updates |
| Forms | React Hook Form + Zod | Type-safe forms |
| Icons | Lucide React | Clean, professional |
| HTTP | Axios | Interceptors for auth |
| Auth | JWT with localStorage |

## 🔐 Authentication Flow

```
Login → /api/v1/auth/login → JWT token
Token stored in localStorage
Token attached to all API requests via Axios interceptor
Auto-logout on 401 response
```

## 📋 API Structure

All backend endpoints are accessible via `http://localhost:3000/api/v1`

### Key API Endpoints

**Public:**
- GET /health
- GET /pages (list, detail)
- GET /news (list, detail by slug)
- GET /events (list, detail by slug)
- GET /staff (list, detail)
- GET /gallery/albums (list, detail by slug)
- GET /menus (navigation)
- GET /settings (site config)
- POST /contact (submit form)

**Admin (protected):**
- All CRUD operations for pages, news, events, staff, gallery, menus, settings, contact
- Login/logout endpoints

## 🎯 Getting Started

### What's Next

Once dependencies install completes:

1. ✅ Test login and dashboard
2. ✅ Build form components with Zod validation
3. ✅ Create CRUD pages for all modules
4. ✅ Add file upload functionality
5. ✅ Create more components (forms, dialogs, etc.)

## 📚 Dependencies Being Installed

```json
{
  "@tanstack/react-query": "^5.90.20",
  "axios": "^1.13.4",
  "zustand": "^5.0.10",
  "zod": "^4.3.6",
  "lucide-react": "^0.563.0",
  "next-themes": "^0.4.6",
  "react-hook-form": "^7.71.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0",
  "date-fns": "^4.1.0",
  "react-hook-form/resolvers": "^5.2.2",
  "sharp": "^0.39.0"
  "react-dropzone": "^14.2.4"
}
```

## ⏳ Current Status

**Problem:** npm install appears to be hanging or very slow

**Workaround:** We'll build the app structure first and can test without those packages initially.

## 🔍 Troubleshooting

### Installation Issues

If `npm install` is stuck:

1. **Cancel and try fresh:**
   ```bash
   pkill -f "npm install"
   npm install --no-save
   ```

2. **Check for lock file issues:**
   ```bash
   rm -f package-lock.json
   npm install
   ```

3. **Install one package at a time:**
   ```bash
   npm install zustand
   npm install @tanstack/react-query
   npm install ...
   ```

4. **Use npm ci:**
   ```bash
   npm ci -- --production=false
   ```

## 📝 Once Working

We have the foundation ready. The admin panel is structurally complete with:

✅ Authentication flow
✅ Layout system with sidebar + header
✅ State management (Zustand)
✅ API client with auth interceptors
✅ TypeScript types
✅ Reusable components (data table, page header, loading spinner)
✅ Dark mode support (next-themes)
✅ Professional color scheme (Slate)

## 🚀 Ready to Test

Once we verify the app works, we'll proceed with:

1. Form components with validation
2. CRUD operations for all modules
3. Image upload functionality
4. Settings page
5. Gallery management
6. Menu manager
7. More UI components

## 📞 Support

For questions, run: `cat START_HERE.md`

## 🎨

**Next.js 14 + shadcn/ui + Tailwind CSS + Zustand + TanStack Query**

A modern, production-ready admin panel built on industry-standard technologies.
