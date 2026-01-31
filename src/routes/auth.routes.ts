import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { validate } from '../middlewares/validation.middleware'
import { auth } from '../middlewares/auth.middleware'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
})

const router = Router()

router.post('/login', validate(loginSchema), (req, res, next) => authController.login(req, res).catch(next))
router.get('/me', auth, (req, res, next) => authController.me(req, res).catch(next))

export { router as authRoutes }
