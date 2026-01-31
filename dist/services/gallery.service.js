"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryService = exports.GalleryService = void 0;
const gallery_action_1 = require("../actions/gallery.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class GalleryService {
    async getAlbums(params) {
        return gallery_action_1.galleryAction.findAlbums(params);
    }
    async getAlbumBySlug(slug) {
        const album = await gallery_action_1.galleryAction.findAlbumBySlug(slug);
        if (!album)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Album not found', 404);
        return album;
    }
    async getAlbumById(id) {
        const album = await gallery_action_1.galleryAction.findAlbumById(id);
        if (!album)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Album not found', 404);
        return album;
    }
    async createAlbum(data) {
        return gallery_action_1.galleryAction.createAlbum(data);
    }
    async deleteAlbum(id) {
        return gallery_action_1.galleryAction.deleteAlbum(id);
    }
    async createImage(albumId, data) {
        return gallery_action_1.galleryAction.createImage(albumId, data);
    }
    async deleteImage(id) {
        return gallery_action_1.galleryAction.deleteImage(id);
    }
}
exports.GalleryService = GalleryService;
exports.galleryService = new GalleryService();
//# sourceMappingURL=gallery.service.js.map