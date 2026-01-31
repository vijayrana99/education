import { z } from 'zod'

export const createPageSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
})

export const updatePageSchema = createPageSchema.partial()

export const createNewsSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9]+$/, 'Only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  image: z.string().url().optional().or(z.literal('')),
  author: z.string().optional(),
  categoryId: z.string().uuid('Invalid category ID'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  publishedAt: z.string().optional(),
})

export const updateNewsSchema = createNewsSchema.partial()

export const createEventSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  image: z.string().url().optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
})

export const updateEventSchema = createEventSchema.partial()

export const createStaffSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  position: z.string().min(2, 'Position is required'),
  department: z.string().optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  phone: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().url().optional().or(z.literal('')),
  displayOrder: z.number().int().min(0, 'Display order must be non-negative'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
})

export const updateStaffSchema = createStaffSchema.partial()

export const createContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email format required'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

export const updateContactStatusSchema = z.object({
  status: z.enum(['NEW', 'READ', 'RESPONDED']),
})

export const createMenuSchema = z.object({
  name: z.string().min(2, 'Menu name is required'),
  location: z.enum(['HEADER', 'FOOTER']),
  parentId: z.string().uuid('Invalid parent ID').optional(),
  title: z.string().min(2, 'Title is required'),
  url: z.string().min(1, 'URL is required'),
  displayOrder: z.number().int().min(0, 'Display order must be non-negative'),
})

export const updateMenuSchema = createMenuSchema.partial()

export const createAlbumSchema = z.object({
  title: z.string().min(2, 'Album title is required'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  coverImage: z.string().url().optional().or(z.literal('')),
})

export const createImageSchema = z.object({
  imageUrl: z.string().url('Image URL is required'),
  title: z.string().optional(),
  caption: z.string().optional(),
  displayOrder: z.number().int().min(0, 'Display order must be non-negative'),
})

export const createSettingSchema = z.object({
  site_name: z.string().min(2, 'Site name is required'),
  site_email: z.string().email('Invalid email format'),
  site_address: z.string().optional(),
  facebook: z.string().url('Facebook URL must be valid URL').optional().or(z.literal('')),
  twitter: z.string().url('Twitter URL must be valid URL').optional().or(z.literal('')),
  instagram: z.string().url('Instagram URL must be valid URL').optional().or(z.literal('')),
  linkedin: z.string().url('LinkedIn URL must be valid URL').optional().or(z.literal('')),
  youtube: z.string().url('YouTube URL must be valid URL').optional().or(z.literal('')),
})

export const updateSettingSchema = createSettingSchema.partial()

export const loginSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const updateProfileSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Email is required').optional(),
  currentPassword: z.string().min(8, 'Current password is required'),
  newPassword: z.string().min(8, 'New password is required'),
  confirmPassword: z.string().min(8, 'Password confirmation is required'),
})

export const loginFormSchema = loginSchema.extend({
  confirmPassword: z.string().min(8, 'Password confirmation is required'),
})
