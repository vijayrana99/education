"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryController = exports.GalleryController = void 0;
const gallery_service_1 = require("../services/gallery.service");
class GalleryController {
    async listAlbums(req, res) {
        const result = await gallery_service_1.galleryService.getAlbums(req.query);
        res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } });
    }
    async getAlbumBySlug(req, res) {
        const album = await gallery_service_1.galleryService.getAlbumBySlug(req.params.slug);
        res.json({ data: album });
    }
    async getById(req, res) {
        const album = await gallery_service_1.galleryService.getAlbumById(req.params.id);
        res.json({ data: album });
    }
    async createAlbum(req, res) {
        const album = await gallery_service_1.galleryService.createAlbum(req.body);
        res.status(201).json({ data: album });
    }
    async deleteAlbum(req, res) {
        await gallery_service_1.galleryService.deleteAlbum(req.params.id);
        res.status(204).send();
    }
    async createImage(req, res) {
        const image = await gallery_service_1.galleryService.createImage(req.params.albumId, req.body);
        res.status(201).json({ data: image });
    }
    async deleteImage(req, res) {
        await gallery_service_1.galleryService.deleteImage(req.params.id);
        res.status(204).send();
    }
}
exports.GalleryController = GalleryController;
exports.galleryController = new GalleryController();
//# sourceMappingURL=gallery.controller.js.map