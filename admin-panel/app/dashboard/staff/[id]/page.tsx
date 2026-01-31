'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, Staff, StaffInput } from '@/types/api'
import { updateStaffSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

type FormData = z.infer<typeof updateStaffSchema>

export default function EditStaffPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(updateStaffSchema),
  })

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await api.get<ApiResponse<Staff>>(`/staff/${params.id}`)
        const member = response.data.data
        setValue('name', member.name)
        setValue('position', member.position)
        setValue('department', member.department || '')
        setValue('email', member.email || '')
        setValue('phone', member.phone || '')
        setValue('bio', member.bio || '')
        setValue('image', member.image || '')
        setValue('displayOrder', member.displayOrder)
        setValue('status', member.status)
      } catch (err: any) {
        setError(err.response?.data?.error?.message || 'Failed to fetch staff member')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchStaff()
    }
  }, [params.id, setValue])

  const onSubmit = async (data: FormData) => {
    setIsSaving(true)
    setError(null)

    try {
      await api.put<ApiResponse<Staff>>(`/admin/staff/${params.id}`, data)
      router.push('/dashboard/staff')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to update staff member')
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Edit Staff</h1>
          <p className="text-slate-600 dark:text-slate-400">Update staff information</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" placeholder="John Doe" error={errors.name?.message} {...register('name')} />
          <Input label="Position/Title" placeholder="Position" error={errors.position?.message} {...register('position')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Department" placeholder="Department" error={errors.department?.message} {...register('department')} />
          <Input label="Display Order" type="number" error={errors.displayOrder?.message} {...register('displayOrder')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Email" type="email" placeholder="email@school.edu" error={errors.email?.message} {...register('email')} />
          <Input label="Phone" placeholder="+1 555-123-4567" error={errors.phone?.message} {...register('phone')} />
        </div>

        <Input label="Photo URL" placeholder="https://..." error={errors.image?.message} {...register('image')} />

        <Textarea label="Biography" placeholder="Staff biography..." error={errors.bio?.message} rows={6} {...register('bio')} />

        <Select label="Status" error={errors.status?.message} options={[
          { value: 'PUBLISHED', label: 'Published' },
          { value: 'DRAFT', label: 'Draft' },
          { value: 'ARCHIVED', label: 'Archived' },
        ]} {...register('status')} />

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Cancel</button>
          <button type="submit" disabled={isSaving} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50">{isSaving ? 'Saving...' : 'Save Changes'}</button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
