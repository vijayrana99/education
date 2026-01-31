'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Upload } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, GalleryAlbum } from '@/types/api'
import { createAlbumSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type FormData = z.infer<typeof createAlbumSchema>

export default function CreateAlbumPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createAlbumSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      await api.post<ApiResponse<GalleryAlbum>>('/admin/gallery/albums', data)
      router.push('/dashboard/gallery')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to create album')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Create Album</h1>
          <p className="text-slate-600 dark:text-slate-400">Create a new photo album</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <Input
          label="Album Title"
          placeholder="Enter album title"
          error={errors.title?.message}
          {...register('title')}
        />

        <Input
          label="Slug"
          placeholder="album-url-slug"
          error={errors.slug?.message}
          helperText="URL-friendly identifier (lowercase, numbers, hyphens)"
          {...register('slug')}
        />

        <Textarea
          label="Description"
          placeholder="Describe this album..."
          error={errors.description?.message}
          rows={4}
          {...register('description')}
        />

        <Input
          label="Cover Image URL"
          placeholder="https://example.com/image.jpg"
          error={errors.coverImage?.message}
          {...register('coverImage')}
        />

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Creating...' : 'Create Album'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
