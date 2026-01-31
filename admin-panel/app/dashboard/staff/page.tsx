'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Edit, Trash2, Search, Mail, Phone, Briefcase } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse, Staff } from '@/types/api'

export default function StaffPage() {
  const router = useRouter()
  const [staff, setStaff] = useState<Staff[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [error, setError] = useState<string | null>(null)

  const fetchStaff = async () => {
    setIsLoading(true)
    try {
      const response = await api.get<ApiResponse<Staff[]>>('/staff')
      setStaff(response.data.data || [])
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to fetch staff')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStaff()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this staff member?')) return
    try {
      await api.delete(`/admin/staff/${id}`)
      setStaff(staff.filter(s => s.id !== id))
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to delete staff')
    }
  }

  const filteredStaff = staff.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.position.toLowerCase().includes(search.toLowerCase()) ||
    (member.department?.toLowerCase().includes(search.toLowerCase()) ?? false)
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Staff</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage faculty and staff directory</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/staff/create')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Staff
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search staff..."
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
        ) : filteredStaff.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
            No staff members found.
          </div>
        ) : (
          filteredStaff.map((member) => (
            <div key={member.id} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 truncate">{member.name}</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {member.position}
                  </p>
                  {member.department && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">{member.department}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                )}
                {member.phone && (
                  <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  member.status === 'PUBLISHED'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {member.status}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.push(`/dashboard/staff/${member.id}`)}
                    className="p-1.5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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
