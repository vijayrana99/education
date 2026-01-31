'use client'

import { useState, useEffect } from 'react'
import { FileText, Users, Calendar, MessageSquare, Image, BookOpen } from 'lucide-react'
import api from '@/lib/api'
import type { ApiResponse } from '@/types/api'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    pages: 0,
    news: 0,
    events: 0,
    staff: 0,
    gallery: 0,
    contact: 0,
  })
  const [isLoading, setIsLoading] = useState(false)

  const fetchStats = async () => {
    setIsLoading(true)
    try {
      const [pagesRes, newsRes, eventsRes, staffRes, galleryRes, contactRes] = await Promise.all([
        api.get<ApiResponse<any[]>>('/pages?limit=100'),
        api.get<ApiResponse<any[]>>('/news?limit=100'),
        api.get<ApiResponse<any[]>>('/events?limit=100'),
        api.get<ApiResponse<any[]>>('/staff?limit=100'),
        api.get<ApiResponse<any[]>>('/gallery/albums?limit=100'),
        api.get<ApiResponse<any[]>>('/admin/contact?status=NEW'),
      ])

      setStats({
        pages: pagesRes.data.meta?.total || 0,
        news: newsRes.data.meta?.total || 0,
        events: eventsRes.data.meta?.total || 0,
        staff: staffRes.data.meta?.total || 0,
        gallery: galleryRes.data.meta?.total || 0,
        contact: contactRes.data.meta?.total || 0,
      })
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const statsCards = [
    {
      title: 'Total Pages',
      value: stats.pages,
      icon: FileText,
      color: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400',
      change: '+12%'
    },
    {
      title: 'News Articles',
      value: stats.news,
      icon: BookOpen,
      color: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
      change: '+8%'
    },
    {
      title: 'Upcoming Events',
      value: stats.events,
      icon: Calendar,
      color: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
      change: '+5%'
    },
    {
      title: 'Staff Members',
      value: stats.staff,
      icon: Users,
      color: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
      change: '+2%'
    },
    {
      title: 'Gallery Items',
      value: stats.gallery,
      icon: Image,
      color: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
      change: '+15%'
    },
    {
      title: 'New Messages',
      value: stats.contact,
      icon: MessageSquare,
      color: 'bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400',
      change: '+3 new',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400">Welcome back! Here's what's happening with your school website.</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{card.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{card.change}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
