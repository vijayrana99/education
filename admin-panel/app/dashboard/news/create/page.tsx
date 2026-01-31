'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, News, NewsCategory, NewsInput } from '@/types/api'
import { createNewsSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import RichTextEditor from '@/components/ui/rich-text-editor'

type FormData = z.infer<typeof createNewsSchema>

export default function CreateNewsPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState<NewsCategory[]>([])
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createNewsSchema),
    defaultValues: {
      status: 'DRAFT',
    },
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get<ApiResponse<NewsCategory[]>>('/news/categories')
        setCategories(response.data.data || [])
      } catch (err) {
        console.error('Failed to fetch categories')
      }
    }
    fetchCategories()
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      await api.post<ApiResponse<News>>('/admin/news', data)
      router.push('/dashboard/news')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to create article')
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Add Article</h1>
          <p className="text-slate-600 dark:text-slate-400">Create a new news article</p>
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
          placeholder="Enter article title"
          error={errors.title?.message}
          {...register('title')}
        />

        <Input
          label="Slug"
          placeholder="article-url-slug"
          error={errors.slug?.message}
          helperText="URL-friendly identifier (lowercase, numbers, hyphens only)"
          {...register('slug')}
        />

        <Textarea
          label="Excerpt"
          placeholder="Brief summary of the article..."
          error={errors.excerpt?.message}
          rows={3}
          {...register('excerpt')}
        />

        <div>
          <RichTextEditor
            content={watch('content') || ''}
            onChange={(content) => setValue('content', content)}
            placeholder="Enter article content..."
            error={errors.content?.message}
          />
        </div>

        <Input
          label="Image URL"
          placeholder="https://example.com/image.jpg"
          error={errors.image?.message}
          {...register('image')}
        />

        <Select
          label="Category"
          error={errors.categoryId?.message}
          options={[
            { value: '', label: 'Select category' },
            ...categories.map(c => ({ value: c.id, label: c.name })),
          ]}
          {...register('categoryId')}
        />

        <Input
          label="Author"
          placeholder="Author name"
          error={errors.author?.message}
          {...register('author')}
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
            {isLoading ? 'Creating...' : 'Create Article'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
