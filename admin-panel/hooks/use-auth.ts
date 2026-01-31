import { useState, useCallback } from 'react'
import api from '@/lib/api'
import { auth } from '@/lib/auth'
import type { LoginInput, User } from '@/types/api'

interface UseAuthReturn {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  login: (input: LoginInput) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(auth.getUser())
  const [token, setToken] = useState<string | null>(auth.getToken())
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(async (input: LoginInput) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await api.post<{ token: string; user: User }>('/auth/login', input)
      const { token: newToken, user: newUser } = response.data
      auth.login(newToken, newUser)
      setToken(newToken)
      setUser(newUser)
    } catch (err: any) {
      const message = err.response?.data?.error?.message || 'Login failed'
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    auth.logout()
    setToken(null)
    setUser(null)
  }, [])

  return {
    user,
    token,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: auth.isAuthenticated(),
  }
}
