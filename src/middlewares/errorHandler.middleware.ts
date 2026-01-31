import { Response, NextFunction } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { Request } from 'express'

export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: any[]
  ) {
    super(message)
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
    })
    return
  }

  if (err instanceof PrismaClientKnownRequestError) {
    const statusCode = err.code === 'P2002' ? 409 : 400
    const code = err.code === 'P2002' ? 'CONFLICT' : 'DATABASE_ERROR'
    const message =
      err.code === 'P2002'
        ? 'A record with this value already exists'
        : 'Database operation failed'

    res.status(statusCode).json({
      error: { code, message, details: err.meta },
    })
    return
  }

  console.error('Unexpected error:', err)
  res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
    },
  })
}
