# School CMS - Content Management System

A full-featured Content Management System for school websites built with Node.js, Express, PostgreSQL, and Next.js.

![School CMS](https://img.shields.io/badge/School-CMS-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-1.0.0-yellow)

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Admin Panel](#-admin-panel)
- [Environment Variables](#-environment-variables)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Content Management
- **Pages** - Create, edit, and manage static pages with rich text editor
- **News** - Publish news articles with categories and authors
- **Events** - Manage calendar events with dates and locations
- **Staff** - Directory of faculty and staff members
- **Gallery** - Photo albums with image management

### Navigation & Configuration
- **Menus** - Hierarchical navigation menu management (Header/Footer)
- **Settings** - Site configuration, social media links, contact info

### User Management
- **Authentication** - JWT-based secure login system
- **Role-based Access** - Admin and Editor roles
- **Contact Form** - Manage submissions with status tracking

### Admin Panel Features
- **Dashboard** - Overview with statistics
- **Rich Text Editor** - TipTap WYSIWYG editor for content
- **Dark Mode** - Full dark mode support
- **Responsive Design** - Works on all devices
- **Real-time Updates** - Instant feedback on actions

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| TypeScript | Type safety |
| Prisma ORM | Database ORM |
| PostgreSQL | Relational database |
| JWT | Authentication |
| Zod | Validation |
| Bcrypt | Password hashing |

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| shadcn/ui | UI components |
| TipTap | Rich text editor |
| React Hook Form | Form handling |
| Zod | Validation |
| Axios | HTTP client |
| Zustand | State management |

## 📁 Project Structure

```
school/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── actions/               # Data access layer
│   │   ├── auth.actions.ts
│   │   ├── page.actions.ts
│   │   ├── news.actions.ts
│   │   └── ...
│   ├── controllers/           # HTTP controllers
│   │   ├── auth.controller.ts
│   │   ├── page.controller.ts
│   │   └── ...
│   ├── middlewares/           # Express middlewares
│   │   ├── auth.middleware.ts
│   │   └── validation.middleware.ts
│   ├── routes/                # Route definitions
│   │   ├── auth.routes.ts
│   │   ├── admin.routes.ts
│   │   └── public.routes.ts
│   ├── services/              # Business logic
│   │   └── auth.service.ts
│   ├── validators/            # Zod schemas
│   │   └── auth.validator.ts
│   └── index.ts               # Entry point
├── admin-panel/
│   ├── app/
│   │   ├── (auth)/            # Auth pages
│   │   │   └── login/
│   │   ├── (dashboard)/       # Dashboard pages
│   │   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   ├── staff/
│   │   │   ├── gallery/
│   │   │   ├── menus/
│   │   │   ├── settings/
│   │   │   └── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   └── rich-text-editor.tsx
│   │   └── forms/             # Form validation schemas
│   ├── lib/
│   │   ├── api.ts             # Axios client
│   │   ├── auth.ts            # Auth utilities
│   │   └── store.ts           # State management
│   └── types/
│       └── api.ts             # TypeScript types
├── .env                        # Environment variables
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Create PostgreSQL database
   createdb school_cms

   # Run migrations
   npx prisma migrate dev

   # (Optional) Seed initial data
   npx prisma db seed
   ```

4. **Install admin panel dependencies**
   ```bash
   cd admin-panel
   npm install
   ```

5. **Configure environment variables**
   ```bash
   # Backend (.env)
   DATABASE_URL="postgresql://user:password@localhost:5432/school_cms"
   JWT_SECRET="your-super-secret-jwt-key"
   PORT=3000

   # Frontend (admin-panel/.env.local)
   NEXT_PUBLIC_API_URL="http://localhost:3000/api/v1"
   ```

### Running the Application

**Start the Backend:**
```bash
# Development with hot reload
npm run dev

# Production
npm start
```

**Start the Admin Panel:**
```bash
cd admin-panel

# Development
npm run dev

# Production build
npm run build
npm start
```

**Access the Application:**
- Backend API: http://localhost:3000
- Admin Panel: http://localhost:3001
- Health Check: http://localhost:3000/health

**Default Admin Credentials:**
- Email: `admin@school.edu`
- Password: `admin123`

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/login` | User login |
| POST | `/api/v1/auth/register` | Register new user |
| GET | `/api/v1/auth/me` | Get current user |
| PUT | `/api/v1/auth/profile` | Update profile |
| PUT | `/api/v1/auth/password` | Change password |

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/pages` | List all pages |
| GET | `/api/v1/pages/:slug` | Get page by slug |
| GET | `/api/v1/news` | List all news |
| GET | `/api/v1/news/:slug` | Get news by slug |
| GET | `/api/v1/news/categories` | List categories |
| GET | `/api/v1/events` | List events |
| GET | `/api/v1/staff` | List staff members |
| GET | `/api/v1/gallery/albums` | List gallery albums |
| GET | `/api/v1/menus` | List navigation menus |
| GET | `/api/v1/settings` | Get site settings |
| POST | `/api/v1/contact` | Submit contact form |

### Admin Endpoints

All admin endpoints require `Authorization: Bearer <token>` header.

**Pages Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/pages` | List all pages |
| POST | `/api/v1/admin/pages` | Create page |
| GET | `/api/v1/admin/pages/:id` | Get page |
| PUT | `/api/v1/admin/pages/:id` | Update page |
| DELETE | `/api/v1/admin/pages/:id` | Delete page |

**News Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/news` | List all news |
| POST | `/api/v1/admin/news` | Create news article |
| GET | `/api/v1/admin/news/:id` | Get article |
| PUT | `/api/v1/admin/news/:id` | Update article |
| DELETE | `/api/v1/admin/news/:id` | Delete article |

**Events Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/events` | List all events |
| POST | `/api/v1/admin/events` | Create event |
| GET | `/api/v1/admin/events/:id` | Get event |
| PUT | `/api/v1/admin/events/:id` | Update event |
| DELETE | `/api/v1/admin/events/:id` | Delete event |

**Staff Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/staff` | List all staff |
| POST | `/api/v1/admin/staff` | Add staff member |
| GET | `/api/v1/admin/staff/:id` | Get staff member |
| PUT | `/api/v1/admin/staff/:id` | Update staff |
| DELETE | `/api/v1/admin/staff/:id` | Delete staff |

**Gallery Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/gallery/albums` | List albums |
| POST | `/api/v1/admin/gallery/albums` | Create album |
| PUT | `/api/v1/admin/gallery/albums/:id` | Update album |
| DELETE | `/api/v1/admin/gallery/albums/:id` | Delete album |
| POST | `/api/v1/admin/gallery/albums/:id/images` | Add image |
| DELETE | `/api/v1/admin/gallery/images/:id` | Delete image |

**Contact Submissions:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/contact` | List submissions |
| PUT | `/api/v1/admin/contact/:id` | Update status |
| DELETE | `/api/v1/admin/contact/:id` | Delete submission |

**Menus Management:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/menus` | List menu items |
| POST | `/api/v1/admin/menus` | Create menu item |
| PUT | `/api/v1/admin/menus/:id` | Update menu item |
| DELETE | `/api/v1/admin/menus/:id` | Delete menu item |

**Settings:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/settings` | Get settings |
| PUT | `/api/v1/admin/settings` | Update settings |

## 🎛️ Admin Panel

### Dashboard
The dashboard provides an overview of your website with statistics:
- Total pages, news articles, events, staff members
- Gallery items count
- New contact messages

### Pages Management
- Create static pages with title, slug, content, and SEO metadata
- Rich text editor (TipTap) for content
- Status management (Draft/Published/Archived)
- Preview on site

### News Management
- Create news articles with categories
- Author attribution
- Excerpt and full content
- Publishing workflow

### Events Management
- Create calendar events
- Set start/end dates and times
- Location information
- Event descriptions

### Staff Directory
- Add staff members with photos
- Department organization
- Contact information
- Display ordering

### Gallery
- Create photo albums
- Add images via URL
- Set cover images
- Image management

### Navigation Menus
- Hierarchical menu structure
- Header and footer locations
- URL customization
- Drag-and-drop ordering (coming soon)

### Settings
- Site name and contact information
- Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- Address configuration

### Contact Submissions
- View all contact form submissions
- Filter by status (New/Read/Responded)
- Mark as read or responded
- Delete unwanted submissions

## 🔧 Environment Variables

### Backend (.env)

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/school_cms"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-min-32-chars"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
NODE_ENV=development

# CORS
CORS_ORIGIN="http://localhost:3001"
```

### Frontend (admin-panel/.env.local)

```env
NEXT_PUBLIC_API_URL="http://localhost:3000/api/v1"
```

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run backend tests with coverage
npm run test:coverage

# Run admin panel tests
cd admin-panel && npm test
```

## 📦 Deployment

### Backend Deployment (Railway/Render/DigitalOcean)

1. Set up PostgreSQL database
2. Configure environment variables
3. Build the application:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Deployment (Vercel/Netlify)

1. Connect your repository
2. Configure build command:
   ```bash
   cd admin-panel && npm run build
   ```
3. Configure output directory:
   ```
   .next
   ```
4. Set environment variables in Vercel dashboard

### Docker Deployment

```dockerfile
# Backend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: school_cms
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://user:password@postgres:5432/school_cms
    depends_on:
      - postgres

  frontend:
    build: ./admin-panel
    ports:
      - "3001:3000"
    depends_on:
      - backend

volumes:
  postgres_data:
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
  5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Prisma](https://www.prisma.io/) - Database ORM
- [TipTap](https://tiptap.dev/) - Headless WYSIWYG Editor
- [shadcn/ui](https://ui.shadcn.com/) - UI Components

## 📞 Support

For support, please open an issue on GitHub or contact the maintainers.

---

Built with ❤️ for schools everywhere.
