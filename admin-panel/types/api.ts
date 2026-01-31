// API Response Types
export interface ApiResponse<T = any> {
  data: T
  meta?: {
    total: number
    limit: number
    offset: number
  }
}

export interface ApiError {
  error: {
    code: string
    message: string
    details?: any[]
  }
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  role: 'ADMIN' | 'EDITOR'
}

// Page Types
export interface Page {
  id: string
  title: string
  slug: string
  content: string
  metaTitle?: string
  metaDescription?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  createdAt: string
  updatedAt: string
}

// News Types
export interface NewsCategory {
  id: string
  name: string
  slug: string
  description?: string
  createdAt: string
}

export interface News {
  id: string
  categoryId: string
  title: string
  slug: string
  excerpt?: string
  content: string
  image?: string
  author?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  publishedAt?: string
  createdAt: string
  updatedAt: string
  category: NewsCategory
}

// Event Types
export interface Event {
  id: string
  title: string
  slug: string
  description?: string
  location?: string
  startDate: string
  endDate?: string
  image?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  createdAt: string
  updatedAt: string
}

// Staff Types
export interface Staff {
  id: string
  name: string
  position: string
  department?: string
  email?: string
  phone?: string
  bio?: string
  image?: string
  displayOrder: number
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  createdAt: string
  updatedAt: string
}

// Gallery Types
export interface GalleryAlbum {
  id: string
  title: string
  slug: string
  description?: string
  coverImage?: string
  createdAt: string
}

export interface GalleryImage {
  id: string
  albumId: string
  title?: string
  imageUrl: string
  caption?: string
  displayOrder: number
  createdAt: string
}

export interface GalleryAlbumWithImages extends GalleryAlbum {
  images: GalleryImage[]
}

// Menu Types
export interface Menu {
  id: string
  name: string
  location: 'HEADER' | 'FOOTER'
  parentId?: string
  title: string
  url: string
  displayOrder: number
  createdAt: string
  children?: Menu[]
}

// Settings Types
export interface Settings {
  [key: string]: string
}

// Contact Types
export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  status: 'NEW' | 'READ' | 'RESPONDED'
  createdAt: string
}

// Form Input Types
export interface LoginInput {
  email: string
  password: string
}

export interface PageInput {
  title: string
  slug: string
  content: string
  metaTitle?: string
  metaDescription?: string
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface NewsInput {
  title: string
  slug: string
  excerpt?: string
  content: string
  image?: string
  author?: string
  categoryId: string
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface EventInput {
  title: string
  slug: string
  description?: string
  location?: string
  startDate: string
  endDate?: string
  image?: string
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface StaffInput {
  name: string
  position: string
  department?: string
  email?: string
  phone?: string
  bio?: string
  image?: string
  displayOrder?: number
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface ContactInput {
  name: string
  email: string
  subject?: string
  message: string
}

export interface SettingsInput {
  site_name?: string
  site_email?: string
  site_address?: string
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  youtube?: string
}
