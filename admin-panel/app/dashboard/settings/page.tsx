'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, Settings, SettingsInput } from '@/types/api'
import { createSettingSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'

type FormData = z.infer<typeof createSettingSchema>

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createSettingSchema),
  })

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get<ApiResponse<Settings>>('/settings')
        const settings = response.data.data
        Object.keys(settings).forEach((key) => {
          register(key as any, { value: settings[key] })
        })
      } catch (err: any) {
        console.error('Failed to fetch settings')
      } finally {
        setIsLoading(false)
      }
    }
    fetchSettings()
  }, [register])

  const onSubmit = async (data: FormData) => {
    setIsSaving(true)
    setError(null)
    setSuccess(null)

    try {
      await api.put('/admin/settings', data)
      setSuccess('Settings saved successfully!')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to save settings')
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
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage site configuration</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">General</h3>
          <Input
            label="Site Name"
            placeholder="My School Website"
            error={errors.site_name?.message}
            {...register('site_name')}
          />
          <Input
            label="Contact Email"
            placeholder="contact@school.edu"
            type="email"
            error={errors.site_email?.message}
            {...register('site_email')}
          />
          <Input
            label="Address"
            placeholder="123 School St, City, State"
            error={errors.site_address?.message}
            {...register('site_address')}
          />
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Social Media</h3>
          <Input
            label="Facebook"
            placeholder="https://facebook.com/..."
            error={errors.facebook?.message}
            {...register('facebook')}
          />
          <Input
            label="Twitter"
            placeholder="https://twitter.com/..."
            error={errors.twitter?.message}
            {...register('twitter')}
          />
          <Input
            label="Instagram"
            placeholder="https://instagram.com/..."
            error={errors.instagram?.message}
            {...register('instagram')}
          />
          <Input
            label="LinkedIn"
            placeholder="https://linkedin.com/..."
            error={errors.linkedin?.message}
            {...register('linkedin')}
          />
          <Input
            label="YouTube"
            placeholder="https://youtube.com/..."
            error={errors.youtube?.message}
            {...register('youtube')}
          />
        </div>

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="submit"
            disabled={isSaving}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { z } from 'zod'
