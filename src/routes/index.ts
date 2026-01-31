import { Router } from 'express'
import { publicRoutes } from './public.routes'
import { adminRoutes } from './admin.routes'
import { authRoutes } from './auth.routes'

const router = Router()

router.use('/', publicRoutes)
router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)

export { router as routes }
