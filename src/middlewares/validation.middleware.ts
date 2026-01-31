import { Request, Response, NextFunction } from 'express'
import { ZodError, ZodTypeAny } from 'zod'

export function validate(schema: ZodTypeAny) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const formatted = error.issues.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        }))
        next({
          code: 'VALIDATION_ERROR',
          message: 'Invalid input data',
          statusCode: 400,
          details: formatted,
        })
      } else {
        next(error)
      }
    }
  }
}
