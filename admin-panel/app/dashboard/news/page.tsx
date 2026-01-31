'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Calendar, User } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse, News } from '@/types/api'

export default function NewsPage() {
  const router = useRouter()
  const [news, setNews] = useState<News[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    setIsLoading(true)
    try {
      const response = await api.get<ApiResponse<News[]>>('/admin/news')
      setNews(response.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch news')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return

    try {
      await api.delete(`/admin/news/${id}`)
      setNews(news.filter(n => n.id !== id))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete article')
    }
  }

  const handleStatusToggle = async (article: News) => {
    try {
      const newStatus = article.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
      await api.put(`/admin/news/${article.id}`, { status: newStatus })
      setNews(news.map(n => n.id === article.id ? { ...n, status: newStatus } : n))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to update status')
    }
  }

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.slug.toLowerCase().includes(search.toLowerCase())
  )

  const getStatusBadge = (status: string | undefined) => {
    const styles: Record<string, { bg: string; text: string; label: string }> = {
      PUBLISHED: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-300', label: 'Published' },
      DRAFT: { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-300', label: 'Draft' },
      ARCHIVED: { bg: 'bg-slate-100 dark:bg-slate-700', text: 'text-slate-800 dark:text-slate-300', label: 'Archived' },
    }
    const style = styles[status || 'DRAFT'] || styles.DRAFT
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${style.bg} ${style.text}`}>
        {style.label}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">News</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage news articles</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/news/create')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Article
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search articles..."
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

      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Article</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" />
                  </div>
                </td>
              </tr>
            ) : filteredNews.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                  No articles found. Create your first article to get started.
                </td>
              </tr>
            ) : (
              filteredNews.map((article) => (
                <tr key={article.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-50">{article.title}</p>
                      {article.excerpt && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-md">{article.excerpt}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {article.category?.name || 'Uncategorized'}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(article.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    {new Date(article.publishedAt || article.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`/news/${article.slug}`}
                        target="_blank"
                        className="p-1.5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors inline-flex"
                        title="View on site"
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleStatusToggle(article)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                        title={article.status === 'PUBLISHED' ? 'Unpublish' : 'Publish'}
                      >
                        <EyeOff className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-1.5 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
