'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Edit, Trash2, GripVertical, Search } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse, Menu } from '@/types/api'

export default function MenusPage() {
  const router = useRouter()
  const [menus, setMenus] = useState<Menu[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMenus = async () => {
    setIsLoading(true)
    try {
      const response = await api.get<ApiResponse<Menu[]>>('/menus')
      setMenus(response.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch menus')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this menu item?')) return
    try {
      await api.delete(`/admin/menus/${id}`)
      setMenus(menus.filter(m => m.id !== id))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete menu')
    }
  }

  const headerMenus = menus.filter(m => m.location === 'HEADER')
  const footerMenus = menus.filter(m => m.location === 'FOOTER')

  const renderMenuTree = (items: Menu[], level = 0) => {
    return items.map((item) => (
      <div key={item.id} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg mb-2">
        <GripVertical className="w-4 h-4 text-slate-400 cursor-move" />
        <div className="flex-1">
          <p className="font-medium text-slate-900 dark:text-slate-50">{item.title}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{item.url}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${item.location === 'HEADER' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
          {item.location}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push(`/dashboard/menus?edit=${item.id}`)}
            className="p-1.5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="p-1.5 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        {item.children && item.children.length > 0 && (
          <div className="ml-8 pl-4 border-l border-slate-200 dark:border-slate-700">
            {renderMenuTree(item.children, level + 1)}
          </div>
        )}
      </div>
    ))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Navigation Menus</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage website navigation</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/menus?create=true')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Menu Item
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Header Menu
            </h2>
            {headerMenus.length === 0 ? (
              <p className="text-slate-500 dark:text-slate-400 text-center py-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg">No header menu items</p>
            ) : (
              renderMenuTree(headerMenus)
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Footer Menu
            </h2>
            {footerMenus.length === 0 ? (
              <p className="text-slate-500 dark:text-slate-400 text-center py-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg">No footer menu items</p>
            ) : (
              renderMenuTree(footerMenus)
            )}
          </div>
        </div>
      )}
    </div>
  )
}
