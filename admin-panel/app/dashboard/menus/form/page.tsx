'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, Menu } from '@/types/api'
import { createMenuSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

type FormData = z.infer<typeof createMenuSchema>

function MenuFormContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('edit')

  const [isLoading, setIsLoading] = useState(!!editId)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createMenuSchema),
    defaultValues: {
      location: 'HEADER',
      displayOrder: 0,
    },
  })

  useEffect(() => {
    if (editId) {
      const fetchMenu = async () => {
        try {
          const response = await api.get<ApiResponse<Menu>>(`/menus/${editId}`)
          const data = response.data.data
          setValue('name', data.name)
          setValue('title', data.title)
          setValue('url', data.url)
          setValue('location', data.location)
          setValue('parentId', data.parentId || undefined)
          setValue('displayOrder', data.displayOrder)
        } catch (err: any) {
          setError(err.response?.data?.error?.message || 'Failed to fetch menu')
        } finally {
          setIsLoading(false)
        }
      }
      fetchMenu()
    } else {
      setIsLoading(false)
    }
  }, [editId, setValue])

  const onSubmit = async (data: FormData) => {
    setIsSaving(true)
    setError(null)

    try {
      if (editId) {
        await api.put(`/admin/menus/${editId}`, data)
      } else {
        await api.post('/admin/menus', data)
      }
      router.push('/dashboard/menus')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to save menu')
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
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{editId ? 'Edit' : 'Create'} Menu Item</h1>
          <p className="text-slate-600 dark:text-slate-400">Add or update navigation menu</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <Input
          label="Menu Name"
          placeholder="Internal menu name"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Display Title"
          placeholder="Link text shown to visitors"
          error={errors.title?.message}
          {...register('title')}
        />

        <Input
          label="URL"
          placeholder="/page-url or https://..."
          error={errors.url?.message}
          {...register('url')}
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Location"
            error={errors.location?.message}
            options={[
              { value: 'HEADER', label: 'Header' },
              { value: 'FOOTER', label: 'Footer' },
            ]}
            {...register('location')}
          />

          <Input
            label="Display Order"
            type="number"
            error={errors.displayOrder?.message}
            {...register('displayOrder')}
          />
        </div>

        <Input
          label="Parent Menu Item"
          placeholder="Leave empty for top-level"
          error={errors.parentId?.message}
          {...register('parentId')}
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Menu Item'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function MenuFormPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" /></div>}>
      <MenuFormContent />
    </Suspense>
  )
}

import { z } from 'zod'
