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
