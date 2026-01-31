import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    me: '/auth/me',
  },
  pages: {
    list: '/pages',
    create: '/admin/pages',
    update: '/admin/pages/:id',
    delete: '/admin/pages/:id',
  },
  news: {
    list: '/news',
    create: '/admin/news',
    update: '/admin/news/:id',
    delete: '/admin/news/:id',
    categories: {
      list: '/news/categories',
      create: '/admin/news/categories',
      update: '/admin/news/categories/:id',
      delete: '/admin/news/categories/:id',
    },
  },
  events: {
    list: '/events',
    create: '/admin/events',
    update: '/admin/events/:id',
    delete: '/admin/events/:id',
  },
  staff: {
    list: '/staff',
    create: '/admin/staff',
    update: '/admin/staff/:id',
    delete: '/admin/staff/:id',
  },
  gallery: {
    albums: {
      list: '/gallery/albums',
      create: '/admin/gallery/albums',
      delete: '/admin/gallery/albums/:id',
      images: {
        create: '/admin/gallery/albums/:albumId/images',
        delete: '/admin/gallery/images/:id',
      },
    },
  },
  menus: {
    list: '/menus',
    create: '/admin/menus',
    update: '/admin/menus/:id',
    delete: '/admin/menus/:id',
  },
  settings: {
    get: '/settings',
    update: '/admin/settings',
  },
  contact: {
    create: '/contact',
    list: '/admin/contact',
    update: '/admin/contact/:id',
  },
} as const
