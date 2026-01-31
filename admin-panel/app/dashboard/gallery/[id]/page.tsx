'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Upload, Plus, Trash2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/lib/api'
import type { ApiResponse, GalleryAlbum, GalleryAlbumWithImages } from '@/types/api'
import { createAlbumSchema } from '@/components/forms/page-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type FormData = z.infer<typeof createAlbumSchema>

export default function EditAlbumPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [album, setAlbum] = useState<GalleryAlbumWithImages | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [newImageUrl, setNewImageUrl] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createAlbumSchema),
  })

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await api.get<ApiResponse<GalleryAlbumWithImages>>(`/gallery/albums/${params.id}`)
        const data = response.data.data
        setAlbum(data)
        setValue('title', data.title)
        setValue('slug', data.slug)
        setValue('description', data.description || '')
        setValue('coverImage', data.coverImage || '')
      } catch (err: any) {
        setError(err.response?.data?.error?.message || 'Failed to fetch album')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchAlbum()
    }
  }, [params.id, setValue])

  const onSubmit = async (data: FormData) => {
    setIsSaving(true)
    setError(null)

    try {
      await api.put<ApiResponse<GalleryAlbum>>(`/admin/gallery/albums/${params.id}`, data)
      router.push('/dashboard/gallery')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to update album')
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddImage = async () => {
    if (!newImageUrl.trim()) return
    try {
      await api.post(`/admin/gallery/albums/${params.id}/images`, { imageUrl: newImageUrl })
      fetchAlbum()
      setNewImageUrl('')
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to add image')
    }
  }

  const fetchAlbum = async () => {
    try {
      const response = await api.get<ApiResponse<GalleryAlbumWithImages>>(`/gallery/albums/${params.id}`)
      setAlbum(response.data.data)
      setValue('title', response.data.data.title)
      setValue('slug', response.data.data.slug)
      setValue('description', response.data.data.description || '')
      setValue('coverImage', response.data.data.coverImage || '')
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch album')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm('Remove this image from the album?')) return
    try {
      await api.delete(`/admin/gallery/images/${imageId}`)
      if (album) {
        setAlbum({ ...album, images: album.images.filter(img => img.id !== imageId) })
      }
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete image')
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Edit Album</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage album and images</p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-6">
        <Input label="Album Title" placeholder="Enter album title" error={errors.title?.message} {...register('title')} />
        <Input label="Slug" placeholder="album-url-slug" error={errors.slug?.message} {...register('slug')} />
        <Textarea label="Description" placeholder="Describe this album..." error={errors.description?.message} rows={3} {...register('description')} />
        <Input label="Cover Image URL" placeholder="https://..." error={errors.coverImage?.message} {...register('coverImage')} />

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Cancel</button>
          <button type="submit" disabled={isSaving} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50">{isSaving ? 'Saving...' : 'Save Changes'}</button>
        </div>
      </form>

      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Album Images</h3>
        
        <div className="flex gap-2">
          <input
            type="url"
            placeholder="Add image URL..."
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddImage}
            disabled={!newImageUrl.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {album?.images.map((image) => (
            <div key={image.id} className="relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden group">
              <img src={image.imageUrl} alt={image.title || ''} className="w-full h-full object-cover" />
              <button
                onClick={() => handleDeleteImage(image.id)}
                className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { z } from 'zod'
