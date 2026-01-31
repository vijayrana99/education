import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../lib/config'
import { ApiError } from './errorHandler.middleware'

export interface JwtPayload {
  userId: string
  email: string
  role: 'ADMIN' | 'EDITOR'
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export function auth(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError('UNAUTHORIZED', 'Missing or invalid authorization header', 401)
  }

  const token = authHeader.substring(7)

  try {
    const payload = jwt.verify(token, config.jwtSecret) as JwtPayload
    req.user = payload
    next()
  } catch (error) {
    throw new ApiError('UNAUTHORIZED', 'Invalid or expired token', 401)
  }
}

export function requireRole(role: 'ADMIN' | 'EDITOR') {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new ApiError('UNAUTHORIZED', 'Authentication required', 401)
    }

    if (req.user.role !== 'ADMIN' && req.user.role !== role) {
      throw new ApiError('FORBIDDEN', 'Insufficient permissions', 403)
    }

    next()
  }
}
