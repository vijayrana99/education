import { Response } from 'express'
import { Request } from 'express'
import { login, getMe } from '../services/auth.service'

export class AuthController {
  async login(req: Request, res: Response) {
    const result = await login(req.body)
    res.json(result)
  }

  async me(req: Request, res: Response) {
    if (!req.user) {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Authentication required' } })
      return
    }
    const user = await getMe(req.user.userId)
    res.json({ user })
  }
}

export const authController = new AuthController()
