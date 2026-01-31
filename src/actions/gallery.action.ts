import prisma from '../lib/prisma'

export class GalleryAction {
  async findAlbums(params: { limit?: number; offset?: number }) {
    const [albums, total] = await Promise.all([
      prisma.galleryAlbum.findMany({
        select: { id: true, title: true, slug: true, description: true, coverImage: true, createdAt: true },
        take: params.limit || 10,
        skip: params.offset || 0,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.galleryAlbum.count(),
    ])
    return { data: albums, total }
  }

  async findAlbumBySlug(slug: string) {
    return prisma.galleryAlbum.findUnique({
      where: { slug },
      include: { images: { orderBy: { displayOrder: 'asc' } } },
    })
  }

  async findAlbumById(id: string) {
    return prisma.galleryAlbum.findUnique({
      where: { id },
      include: { images: { orderBy: { displayOrder: 'asc' } } },
    })
  }

  async createAlbum(data: any) {
    return prisma.galleryAlbum.create({ data })
  }

  async deleteAlbum(id: string) {
    return prisma.galleryAlbum.delete({ where: { id } })
  }

  async createImage(albumId: string, data: any) {
    return prisma.galleryImage.create({ data: { albumId, ...data } })
  }

  async deleteImage(id: string) {
    return prisma.galleryImage.delete({ where: { id } })
  }
}

export const galleryAction = new GalleryAction()
