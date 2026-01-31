import { z } from 'zod'
import { createPageSchema, updatePageSchema } from './page.validator'
import { contactSchema } from './contact.validator'

const newsSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  image: z.string().optional(),
  author: z.string().optional(),
  categoryId: z.string().uuid('Invalid category ID'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
})

const eventSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  location: z.string().optional(),
  startDate: z.coerce.date('Start date is required'),
  endDate: z.coerce.date('End date is required').optional(),
  image: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
})

const staffSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  position: z.string().min(2, 'Position is required'),
  department: z.string().optional(),
  email: z.string().email('Invalid email format').optional(),
  phone: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
  displayOrder: z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
})

const menuSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  location: z.enum(['HEADER', 'FOOTER'], 'Location must be HEADER or FOOTER'),
  parentId: z.string().uuid('Invalid parent ID').optional(),
  title: z.string().min(2, 'Title is required'),
  url: z.string().min(1, 'URL is required'),
  displayOrder: z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
})

const homeSectionSchema = z.object({
  type: z.enum(['HERO', 'WELCOME', 'FEATURES', 'SPOTLIGHT', 'NOTICES'], 'Type is required'),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  content: z.string().optional(),
  image: z.string().optional(),
  link: z.string().url('Link must be a valid URL').optional(),
  linkText: z.string().optional(),
  displayOrder: z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
})

const galleryAlbumSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  coverImage: z.string().optional(),
})

const galleryImageSchema = z.object({
  title: z.string().optional(),
  imageUrl: z.string().min(1, 'Image URL is required'),
  caption: z.string().optional(),
  displayOrder: z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
})

export { createPageSchema, updatePageSchema, contactSchema, newsSchema, eventSchema, staffSchema, menuSchema, homeSectionSchema, galleryAlbumSchema, galleryImageSchema }
