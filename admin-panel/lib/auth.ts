export const auth = {
  login: (token: string, user: User) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    }
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },

  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token')
    }
    return null
  },

  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    }
    return null
  },

  isAuthenticated: () => {
    return typeof window !== 'undefined' && !!localStorage.getItem('token')
  },

  getCurrentUser: async (): Promise<User | null> => {
    if (typeof window === 'undefined') return null
    const token = localStorage.getItem('token')
    if (!token) return null
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) return null
      const data = await response.json()
      return data.data
    } catch {
      return null
    }
  },
}

export const USER_ROLE = {
  ADMIN: 'ADMIN' as const,
  EDITOR: 'EDITOR' as const,
}

export type UserRole = typeof USER_ROLE[keyof typeof USER_ROLE]

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}
