# Admin Panel - Quick Start

## 🚀 Start Development

```bash
cd admin-panel
npm run dev
```

## 🔑 Login Credentials

```
Email: admin@school.edu
Password: admin123
```

## 📁 Project Structure

```
admin-panel/
├── lib/
│   ├── api.ts              # Axios client with auth interceptors
│   ├── auth.ts             # Login/logout utilities
│   ├── store.ts            # Zustand stores
│   └── utils.ts            # Helper functions
├── types/
│   └── api.ts              # TypeScript types
├── components/
│   ├── providers.tsx        # Theme provider
│   ├── layout/
│   │   ├── sidebar.tsx      # Dashboard sidebar
│   │   ├── header.tsx       # Dashboard header
│   │   └── theme-toggle.tsx  # Dark mode toggle
│   ├── shared/
│   │   ├── data-table.tsx    # Reusable data table
│   │   ├── page-header.tsx   # Page header component
│   │   ├── loading-spinner.tsx # Loading indicator
│   │   └── confirmation-dialog.tsx
│   ├── forms/             # Form components (to be added)
│   └── ui/                # shadcn/ui components (to be added)
├── app/
│   ├── layout.tsx           # Root layout + providers
│   ├── globals.css          # CSS variables + dark mode
│   ├── (auth)/
│   │   ├── layout.tsx      # Auth layout
│   │   └── page.tsx       # Login page
│   ├── (dashboard)/
│   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   └── page.tsx       # Dashboard page with stats
│   ├── api/               # File upload API route (to be added)
│   ├── tailwind.config.ts     # Tailwind config + color scheme
│   └── not-found.tsx       # 404 page
└── [next.config.ts, tsconfig.json, package.json]
```

## 🎨 Color Scheme (Professional Slate)

```
Primary:    Slate 600 (light) → Slate 400 (dark)
Accent:     Indigo 600
Success:    Emerald 600
Warning:    Amber 500
Error:      Rose 600
Background:  White → Slate 950 (dark mode)
Surface:    Slate 50 → Slate 900 (dark mode)
Border:     Slate 200 → Slate 800 (dark mode)
```

## 📊 API Base URL

```
Default: http://localhost:3000/api/v1
```

Update in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
```

## 📝 Endpoints Available

```
Authentication
  POST   /auth/login
  GET    /auth/me

Dashboard
  GET    /dashboard

Pages
  GET    /pages
  POST   /admin/pages
  PUT    /admin/pages/:id
  DELETE /admin/pages/:id

News
  GET    /news
  GET    /news/:slug
  GET    /news/categories
  POST   /admin/news
  PUT    /admin/news/:id
  DELETE /admin/news/:id

Events
  GET    /events
  GET    /events/:slug
  POST   /admin/events
  PUT    /admin/events/:id
  DELETE /admin/events/:id

Staff
  GET    /staff
  GET    /staff/:id
  POST   /admin/staff
  PUT    /admin/staff/:id
  DELETE /admin/staff/:id

Gallery
  GET    /gallery/albums
  GET    /gallery/albums/:slug
  POST   /admin/gallery/albums
  DELETE /admin/gallery/albums/:id
  POST   /admin/gallery/albums/:albumId/images
  DELETE /admin/gallery/images/:id

Menus
  GET    /menus
  POST   /admin/menus
  PUT    /admin/menus/:id
  DELETE /admin/menus/:id

Settings
  GET    /settings
  PUT    /admin/settings

Contact
  POST   /contact
  GET    /admin/contact
  GET    /admin/contact/:id
  PUT    /admin/contact/:id

Health
  GET    /health
```

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (utility-first)
- **shadcn/ui** (copy-paste components)
- **TanStack Query** (react-query for data fetching)
- **React Hook Form** + **Zod** (type-safe forms)
- **Zustand** (state management)
- **next-themes** (dark mode support)
- **Lucide React** (icons)
- **Axios** (HTTP client with interceptors)

## 🔄 Auth Flow

1. Login → `/api/v1/auth/login`
2. Receive JWT token
3. Store in localStorage
4. Redirect to `/dashboard`
5. Auto-attach token to all API requests

## 📝 Next Steps

1. ✅ Dependencies installing
2. ⏳ Create form components (CRUD forms)
3. ⏳ Implement pages/news/events/staff pages
4. ⏳ Add file upload functionality
5. ⏳ Implement settings module
6. ⏳ Add gallery management
7. ⏳ Build menu manager
8. ⏳ Add more validators

## ❓ Need Help?

Check the main README for complete documentation or ask me:
- "How do I add a new page?"
- "How do I integrate with the backend?"
- "How do I deploy this?"

I'll continue building out the CRUD pages and forms while dependencies install completes!
