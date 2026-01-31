import { Router } from 'express'
import { pageController } from '../controllers/page.controller'
import { newsController } from '../controllers/news.controller'
import { newsCategoryController } from '../controllers/newsCategory.controller'
import { eventController } from '../controllers/event.controller'
import { staffController } from '../controllers/staff.controller'
import { galleryController } from '../controllers/gallery.controller'
import { menuController } from '../controllers/menu.controller'
import { settingController } from '../controllers/setting.controller'
import { contactController } from '../controllers/contact.controller'
import { homeSectionController } from '../controllers/homeSection.controller'
import { validate } from '../middlewares/validation.middleware'
import { contactSchema } from '../validators/contact.validator'

const router = Router()

router.get('/pages', (req, res, next) => pageController.list(req, res).catch(next))
router.get('/pages/:id', (req, res, next) => pageController.getById(req, res).catch(next))

router.get('/news/categories', (req, res, next) => newsCategoryController.list(req, res).catch(next))
router.get('/news/categories/:slug', (req, res, next) => newsCategoryController.getBySlug(req, res).catch(next))

router.get('/home-sections', (req, res, next) => homeSectionController.list(req, res).catch(next))

router.get('/news', (req, res, next) => newsController.list(req, res).catch(next))
router.get('/news/:slug', (req, res, next) => newsController.getBySlug(req, res).catch(next))

router.get('/events', (req, res, next) => eventController.list(req, res).catch(next))
router.get('/events/:slug', (req, res, next) => eventController.getBySlug(req, res).catch(next))

router.get('/staff', (req, res, next) => staffController.list(req, res).catch(next))
router.get('/staff/:id', (req, res, next) => staffController.getById(req, res).catch(next))

router.get('/gallery/albums', (req, res, next) => galleryController.listAlbums(req, res).catch(next))
router.get('/gallery/albums/:slug', (req, res, next) => galleryController.getAlbumBySlug(req, res).catch(next))

router.get('/menus', (req, res, next) => menuController.list(req, res).catch(next))

router.get('/settings', (req, res, next) => settingController.get(req, res).catch(next))

router.post('/contact', validate(contactSchema), (req, res, next) => contactController.submit(req, res).catch(next))

export { router as publicRoutes }
