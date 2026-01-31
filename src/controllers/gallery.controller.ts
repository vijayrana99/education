import { Response } from 'express'
import { galleryService } from '../services/gallery.service'

export class GalleryController {
  async listAlbums(req: any, res: Response) {
    const result = await galleryService.getAlbums(req.query)
    res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } })
  }

  async getAlbumBySlug(req: any, res: Response) {
    const album = await galleryService.getAlbumBySlug(req.params.slug)
    res.json({ data: album })
  }

  async getById(req: any, res: Response) {
    const album = await galleryService.getAlbumById(req.params.id)
    res.json({ data: album })
  }

  async createAlbum(req: any, res: Response) {
    const album = await galleryService.createAlbum(req.body)
    res.status(201).json({ data: album })
  }

  async deleteAlbum(req: any, res: Response) {
    await galleryService.deleteAlbum(req.params.id)
    res.status(204).send()
  }

  async createImage(req: any, res: Response) {
    const image = await galleryService.createImage(req.params.albumId, req.body)
    res.status(201).json({ data: image })
  }

  async deleteImage(req: any, res: Response) {
    await galleryService.deleteImage(req.params.id)
    res.status(204).send()
  }
}

export const galleryController = new GalleryController()
