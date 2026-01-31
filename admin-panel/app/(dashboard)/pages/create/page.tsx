'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, PageInput } from '@/types/api'
import { createPageSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

type FormData = z.infer<typeof createPageSchema>

export default function CreatePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createPageSchema),
    defaultValues: {
      status: 'DRAFT',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      await api.post<ApiResponse<Page>>('/admin/pages', data)
      router.push('/dashboard/pages')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to create page')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Create Page</h1>
          <p className="text-slate-600 dark:text-slate-400">Add a new page to your website</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <Input
          label="Title"
          placeholder="Enter page title"
          error={errors.title?.message}
          {...register('title')}
        />

        <Input
          label="Slug"
          placeholder="page-url-slug"
          error={errors.slug?.message}
          helperText="URL-friendly identifier (lowercase, hyphens only)"
          {...register('slug')}
        />

        <Textarea
          label="Content"
          placeholder="Enter page content..."
          error={errors.content?.message}
          rows={10}
          {...register('content')}
        />

        <Input
          label="Meta Title"
          placeholder="SEO title (optional)"
          error={errors.metaTitle?.message}
          {...register('metaTitle')}
        />

        <Textarea
          label="Meta Description"
          placeholder="SEO description (optional)"
          error={errors.metaDescription?.message}
          rows={3}
          {...register('metaDescription')}
        />

        <Select
          label="Status"
          error={errors.status?.message}
          options={[
            { value: 'DRAFT', label: 'Draft' },
            { value: 'PUBLISHED', label: 'Published' },
            { value: 'ARCHIVED', label: 'Archived' },
          ]}
          {...register('status')}
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating...' : 'Create Page'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
import type { Page } from '@/types/api'
