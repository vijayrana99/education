import { galleryAction } from '../actions/gallery.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class GalleryService {
  async getAlbums(params: any) {
    return galleryAction.findAlbums(params)
  }

  async getAlbumBySlug(slug: string) {
    const album = await galleryAction.findAlbumBySlug(slug)
    if (!album) throw new ApiError('NOT_FOUND', 'Album not found', 404)
    return album
  }

  async getAlbumById(id: string) {
    const album = await galleryAction.findAlbumById(id)
    if (!album) throw new ApiError('NOT_FOUND', 'Album not found', 404)
    return album
  }

  async createAlbum(data: any) {
    return galleryAction.createAlbum(data)
  }

  async deleteAlbum(id: string) {
    return galleryAction.deleteAlbum(id)
  }

  async createImage(albumId: string, data: any) {
    return galleryAction.createImage(albumId, data)
  }

  async deleteImage(id: string) {
    return galleryAction.deleteImage(id)
  }
}

export const galleryService = new GalleryService()
