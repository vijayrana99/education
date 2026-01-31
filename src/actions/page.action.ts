import prisma from '../lib/prisma'

export class PageAction {
  async findAll(params: { limit?: number; offset?: number; status?: string }) {
    const [data, total] = await Promise.all([
      prisma.page.findMany({
        where: params.status ? { status: params.status as any } : undefined,
        select: {
          id: true,
          title: true,
          slug: true,
          metaTitle: true,
          metaDescription: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
        take: params.limit || 10,
        skip: params.offset || 0,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.page.count(params.status ? { where: { status: params.status as any } } : undefined),
    ])

    return { data, total }
  }

  async findBySlug(slug: string) {
    return prisma.page.findUnique({
      where: { slug },
    })
  }

  async findById(id: string) {
    return prisma.page.findUnique({
      where: { id },
    })
  }

  async create(data: any) {
    return prisma.page.create({
      data,
    })
  }

  async update(id: string, data: any) {
    return prisma.page.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    return prisma.page.delete({
      where: { id },
    })
  }
}

export const pageAction = new PageAction()
