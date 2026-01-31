'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, Staff, StaffInput } from '@/types/api'
import { createStaffSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

type FormData = z.infer<typeof createStaffSchema>

export default function CreateStaffPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createStaffSchema),
    defaultValues: {
      status: 'PUBLISHED',
      displayOrder: 0,
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      await api.post<ApiResponse<Staff>>('/admin/staff', data)
      router.push('/dashboard/staff')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to add staff member')
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Add Staff</h1>
          <p className="text-slate-600 dark:text-slate-400">Add a new staff member</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Position/Title"
            placeholder="Professor, Director, etc."
            error={errors.position?.message}
            {...register('position')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Department"
            placeholder="Mathematics, Science, etc."
            error={errors.department?.message}
            {...register('department')}
          />

          <Input
            label="Display Order"
            type="number"
            error={errors.displayOrder?.message}
            {...register('displayOrder')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email"
            type="email"
            placeholder="john.doe@school.edu"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Phone"
            placeholder="+1 (555) 123-4567"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>

        <Input
          label="Photo URL"
          placeholder="https://example.com/photo.jpg"
          error={errors.image?.message}
          {...register('image')}
        />

        <Textarea
          label="Biography"
          placeholder="Staff biography and qualifications..."
          error={errors.bio?.message}
          rows={6}
          {...register('bio')}
        />

        <Select
          label="Status"
          error={errors.status?.message}
          options={[
            { value: 'PUBLISHED', label: 'Published' },
            { value: 'DRAFT', label: 'Draft' },
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Adding...' : 'Add Staff Member'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
