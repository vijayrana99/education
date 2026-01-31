import { z } from 'zod'

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
})

// Page Schemas
export const createPageSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  content: z.string().min(1, 'Content is required'),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
})

export const updatePageSchema = createPageSchema.partial()

// News Schemas
export const createNewsSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  image: z.string().url().optional(),
  author: z.string().optional(),
  categoryId: z.string().uuid('Invalid category ID'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  publishedAt: z.coerce.date().optional(),
})

export const updateNewsSchema = createNewsSchema.partial()

export const createCategorySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
})

// Event Schemas
export const createEventSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  location: z.string().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  image: z.string().url().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
})

export const updateEventSchema = createEventSchema.partial()

// Staff Schemas
export const createStaffSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  position: z.string().min(2, 'Position is required'),
  department: z.string().optional(),
  email: z.string().email('Invalid email').optional(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().url().optional(),
  displayOrder: z.coerce.number().int().min(0).default(0),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
})

export const updateStaffSchema = createStaffSchema.partial()

// Menu Schemas
export const createMenuSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  location: z.enum(['HEADER', 'FOOTER']),
  parentId: z.string().uuid().optional(),
  title: z.string().min(2, 'Title is required'),
  url: z.string().min(1, 'URL is required'),
  displayOrder: z.coerce.number().int().min(0).default(0),
})

export const updateMenuSchema = createMenuSchema.partial()

// Gallery Schemas
export const createAlbumSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  coverImage: z.string().url().optional(),
})

export const updateAlbumSchema = createAlbumSchema.partial()

export const createImageSchema = z.object({
  title: z.string().optional(),
  imageUrl: z.string().url('Valid image URL is required'),
  caption: z.string().optional(),
  displayOrder: z.coerce.number().int().min(0).default(0),
})

// Contact Schemas
export const createContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

export const updateContactStatusSchema = z.object({
  status: z.enum(['NEW', 'READ', 'RESPONDED']),
})

// Settings Schema
export const updateSettingsSchema = z.object({
  site_name: z.string().optional(),
  site_email: z.string().email().optional(),
  site_address: z.string().optional(),
  facebook: z.string().url().optional().or(z.literal('')),
  twitter: z.string().url().optional().or(z.literal('')),
  instagram: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal('')),
  youtube: z.string().url().optional().or(z.literal('')),
})
