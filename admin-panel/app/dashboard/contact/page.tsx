'use client'

import { useState, useEffect } from 'react'
import { Search, Check, Mail, Eye, EyeOff, Trash2, User, Calendar } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse, ContactSubmission } from '@/types/api'

export default function ContactPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string>('all')
  const [error, setError] = useState<string | null>(null)

  const fetchSubmissions = async () => {
    setIsLoading(true)
    try {
      const response = await api.get<ApiResponse<ContactSubmission[]>>('/admin/contact')
      setSubmissions(response.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch submissions')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const handleStatusChange = async (id: string, status: 'NEW' | 'READ' | 'RESPONDED') => {
    try {
      await api.put(`/admin/contact/${id}`, { status })
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to update status')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this submission?')) return
    try {
      await api.delete(`/admin/contact/${id}`)
      setSubmissions(submissions.filter(s => s.id !== id))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete')
    }
  }

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(search.toLowerCase()) ||
      sub.email.toLowerCase().includes(search.toLowerCase()) ||
      (sub.subject?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
      sub.message.toLowerCase().includes(search.toLowerCase())
    
    if (filter === 'all') return matchesSearch
    return matchesSearch && sub.status === filter
  })

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { bg: string; text: string }> = {
      NEW: { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-300' },
      READ: { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-300' },
      RESPONDED: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-300' },
    }
    const style = styles[status] || styles.NEW
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${style.bg} ${style.text}`}>
        {status}
      </span>
    )
  }

  const counts = {
    all: submissions.length,
    NEW: submissions.filter(s => s.status === 'NEW').length,
    READ: submissions.filter(s => s.status === 'READ').length,
    RESPONDED: submissions.filter(s => s.status === 'RESPONDED').length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Contact Submissions</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage contact form submissions</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-2">
          {(['all', 'NEW', 'READ', 'RESPONDED'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                filter === status
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {status === 'all' ? 'All' : status} ({counts[status as keyof typeof counts]})
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-transparent" />
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            No submissions found.
          </div>
        ) : (
          filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-slate-50">{submission.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{submission.email}</p>
                    </div>
                    {getStatusBadge(submission.status)}
                  </div>

                  {submission.subject && (
                    <p className="font-medium text-slate-900 dark:text-slate-50 mt-3">{submission.subject}</p>
                  )}

                  <p className="text-slate-600 dark:text-slate-400 mt-2">{submission.message}</p>

                  <div className="flex items-center gap-4 mt-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(submission.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {submission.status !== 'READ' && (
                    <button
                      onClick={() => handleStatusChange(submission.id, 'READ')}
                      className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                      title="Mark as Read"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  {submission.status !== 'RESPONDED' && (
                    <button
                      onClick={() => handleStatusChange(submission.id, 'RESPONDED')}
                      className="p-1.5 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                      title="Mark as Responded"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(submission.id)}
                    className="p-1.5 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                    title="Delete"
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
