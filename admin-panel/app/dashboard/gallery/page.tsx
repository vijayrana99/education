'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Edit, Trash2, Image as ImageIcon, Eye, EyeOff, Search } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse, GalleryAlbum } from '@/types/api'

export default function GalleryPage() {
  const router = useRouter()
  const [albums, setAlbums] = useState<GalleryAlbum[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [error, setError] = useState<string | null>(null)

  const fetchAlbums = async () => {
    setIsLoading(true)
    try {
      const response = await api.get<ApiResponse<GalleryAlbum[]>>('/gallery/albums')
      setAlbums(response.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch albums')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this album?')) return
    try {
      await api.delete(`/admin/gallery/albums/${id}`)
      setAlbums(albums.filter(a => a.id !== id))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete album')
    }
  }

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Gallery</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage photo albums</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/gallery/create')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Album
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search albums..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" />
          </div>
        ) : filteredAlbums.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
            No albums found. Create your first album to get started.
          </div>
        ) : (
          filteredAlbums.map((album) => (
            <div key={album.id} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {album.coverImage ? (
                  <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-12 h-12 text-slate-400" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{album.title}</h3>
                {album.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{album.description}</p>
                )}
                <p className="text-xs text-slate-400 mt-2">
                  Created {new Date(album.createdAt).toLocaleDateString()}
                </p>
                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => router.push(`/dashboard/gallery/${album.id}`)}
                    className="p-1.5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(album.id)}
                    className="p-1.5 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
