import { Router } from 'express'
import { auth, requireRole } from '../middlewares/auth.middleware'
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
import { createPageSchema, updatePageSchema, newsSchema, eventSchema, staffSchema, menuSchema, homeSectionSchema, galleryAlbumSchema, galleryImageSchema } from '../validators'

const router = Router()
router.use(auth)

router.get('/pages', (req, res, next) => pageController.list(req, res).catch(next))
router.post('/pages', requireRole('EDITOR'), validate(createPageSchema), (req, res, next) => pageController.create(req, res).catch(next))
router.get('/pages/:id', (req, res, next) => pageController.getById(req, res).catch(next))
router.put('/pages/:id', requireRole('EDITOR'), validate(updatePageSchema), (req, res, next) => pageController.update(req, res).catch(next))
router.delete('/pages/:id', requireRole('EDITOR'), (req, res, next) => pageController.delete(req, res).catch(next))

router.get('/home-sections', (req, res, next) => homeSectionController.list(req, res).catch(next))
router.post('/home-sections', requireRole('EDITOR'), validate(homeSectionSchema), (req, res, next) => homeSectionController.create(req, res).catch(next))
router.get('/home-sections/:id', (req, res, next) => homeSectionController.getById(req, res).catch(next))
router.put('/home-sections/:id', requireRole('EDITOR'), validate(homeSectionSchema), (req, res, next) => homeSectionController.update(req, res).catch(next))
router.delete('/home-sections/:id', requireRole('EDITOR'), (req, res, next) => homeSectionController.delete(req, res).catch(next))

router.get('/news/categories', (req, res, next) => newsCategoryController.list(req, res).catch(next))
router.post('/news/categories', requireRole('EDITOR'), (req, res, next) => newsCategoryController.create(req, res).catch(next))
router.get('/news/categories/:id', (req, res, next) => newsCategoryController.getBySlug(req, res).catch(next))
router.put('/news/categories/:id', requireRole('EDITOR'), (req, res, next) => newsCategoryController.update(req, res).catch(next))
router.delete('/news/categories/:id', requireRole('EDITOR'), (req, res, next) => newsCategoryController.delete(req, res).catch(next))

router.get('/news', (req, res, next) => newsController.list(req, res).catch(next))
router.post('/news', requireRole('EDITOR'), validate(newsSchema), (req, res, next) => newsController.create(req, res).catch(next))
router.get('/news/:id', (req, res, next) => newsController.getById(req, res).catch(next))
router.put('/news/:id', requireRole('EDITOR'), validate(newsSchema), (req, res, next) => newsController.update(req, res).catch(next))
router.delete('/news/:id', requireRole('EDITOR'), (req, res, next) => newsController.delete(req, res).catch(next))

router.get('/events', (req, res, next) => eventController.list(req, res).catch(next))
router.post('/events', requireRole('EDITOR'), validate(eventSchema), (req, res, next) => eventController.create(req, res).catch(next))
router.get('/events/:id', (req, res, next) => eventController.getById(req, res).catch(next))
router.put('/events/:id', requireRole('EDITOR'), validate(eventSchema), (req, res, next) => eventController.update(req, res).catch(next))
router.delete('/events/:id', requireRole('EDITOR'), (req, res, next) => eventController.delete(req, res).catch(next))

router.get('/staff', (req, res, next) => staffController.list(req, res).catch(next))
router.post('/staff', requireRole('EDITOR'), validate(staffSchema), (req, res, next) => staffController.create(req, res).catch(next))
router.get('/staff/:id', (req, res, next) => staffController.getById(req, res).catch(next))
router.put('/staff/:id', requireRole('EDITOR'), validate(staffSchema), (req, res, next) => staffController.update(req, res).catch(next))
router.delete('/staff/:id', requireRole('EDITOR'), (req, res, next) => staffController.delete(req, res).catch(next))

router.get('/gallery/albums', (req, res, next) => galleryController.listAlbums(req, res).catch(next))
router.post('/gallery/albums', requireRole('EDITOR'), validate(galleryAlbumSchema), (req, res, next) => galleryController.createAlbum(req, res).catch(next))
router.get('/gallery/albums/:id', (req, res, next) => galleryController.getById(req, res).catch(next))
router.delete('/gallery/albums/:id', requireRole('EDITOR'), (req, res, next) => galleryController.deleteAlbum(req, res).catch(next))
router.get('/gallery/albums/:albumId/images', (req, res, next) => galleryController.listAlbums(req, res).catch(next))
router.post('/gallery/albums/:albumId/images', requireRole('EDITOR'), validate(galleryImageSchema), (req, res, next) => galleryController.createImage(req, res).catch(next))
router.delete('/gallery/images/:id', requireRole('EDITOR'), (req, res, next) => galleryController.deleteImage(req, res).catch(next))

router.get('/menus', (req, res, next) => menuController.list(req, res).catch(next))
router.post('/menus', requireRole('EDITOR'), validate(menuSchema), (req, res, next) => menuController.create(req, res).catch(next))
router.get('/menus/:id', (req, res, next) => menuController.getById(req, res).catch(next))
router.put('/menus/:id', requireRole('EDITOR'), validate(menuSchema), (req, res, next) => menuController.update(req, res).catch(next))
router.delete('/menus/:id', requireRole('EDITOR'), (req, res, next) => menuController.delete(req, res).catch(next))

router.get('/settings', (req, res, next) => settingController.get(req, res).catch(next))
router.put('/settings', requireRole('EDITOR'), (req, res, next) => settingController.update(req, res).catch(next))

router.get('/contact', (req, res, next) => contactController.list(req, res).catch(next))
router.get('/contact/:id', (req, res, next) => contactController.getById(req, res).catch(next))
router.put('/contact/:id', requireRole('EDITOR'), (req, res, next) => contactController.updateStatus(req, res).catch(next))

export { router as adminRoutes }
