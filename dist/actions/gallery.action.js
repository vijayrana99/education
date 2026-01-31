"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryAction = exports.GalleryAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class GalleryAction {
    async findAlbums(params) {
        const [albums, total] = await Promise.all([
            prisma_1.default.galleryAlbum.findMany({
                select: { id: true, title: true, slug: true, description: true, coverImage: true, createdAt: true },
                take: params.limit || 10,
                skip: params.offset || 0,
                orderBy: { createdAt: 'desc' },
            }),
            prisma_1.default.galleryAlbum.count(),
        ]);
        return { data: albums, total };
    }
    async findAlbumBySlug(slug) {
        return prisma_1.default.galleryAlbum.findUnique({
            where: { slug },
            include: { images: { orderBy: { displayOrder: 'asc' } } },
        });
    }
    async findAlbumById(id) {
        return prisma_1.default.galleryAlbum.findUnique({
            where: { id },
            include: { images: { orderBy: { displayOrder: 'asc' } } },
        });
    }
    async createAlbum(data) {
        return prisma_1.default.galleryAlbum.create({ data });
    }
    async deleteAlbum(id) {
        return prisma_1.default.galleryAlbum.delete({ where: { id } });
    }
    async createImage(albumId, data) {
        return prisma_1.default.galleryImage.create({ data: { albumId, ...data } });
    }
    async deleteImage(id) {
        return prisma_1.default.galleryImage.delete({ where: { id } });
    }
}
exports.GalleryAction = GalleryAction;
exports.galleryAction = new GalleryAction();
//# sourceMappingURL=gallery.action.js.map