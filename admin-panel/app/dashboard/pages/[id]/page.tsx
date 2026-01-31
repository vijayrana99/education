'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, Page, PageInput } from '@/types/api'
import { updatePageSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import RichTextEditor from '@/components/ui/rich-text-editor'

type FormData = z.infer<typeof updatePageSchema>

export default function EditPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(updatePageSchema),
  })

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await api.get<ApiResponse<Page>>(`/pages/${params.id}`)
        const page = response.data.data
        setValue('title', page.title)
        setValue('slug', page.slug)
        setValue('content', page.content)
        setValue('metaTitle', page.metaTitle || '')
        setValue('metaDescription', page.metaDescription || '')
        setValue('status', page.status)
      } catch (err: any) {
        setError(err.response?.data?.error?.message || 'Failed to fetch page')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchPage()
    }
  }, [params.id, setValue])

  const onSubmit = async (data: FormData) => {
    setIsSaving(true)
    setError(null)

    try {
      await api.put<ApiResponse<Page>>(`/admin/pages/${params.id}`, data)
      router.push('/dashboard/pages')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to update page')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" />
      </div>
    )
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Edit Page</h1>
          <p className="text-slate-600 dark:text-slate-400">Update page content and settings</p>
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

        <div>
          <RichTextEditor
            content={watch('content') || ''}
            onChange={(content) => setValue('content', content)}
            placeholder="Enter page content..."
            error={errors.content?.message}
          />
        </div>

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
            disabled={isSaving}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
