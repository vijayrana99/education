import prisma from '../lib/prisma'

export class NewsAction {
  async findAll(params: { limit?: number; offset?: number; categoryId?: string; status?: string }) {
    const where: any = {}
    if (params.categoryId) where.categoryId = params.categoryId
    if (params.status) where.status = params.status

    const [data, total] = await Promise.all([
      prisma.news.findMany({
        where,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          image: true,
          author: true,
          publishedAt: true,
          category: { select: { id: true, name: true, slug: true } },
          createdAt: true,
        },
        take: params.limit || 10,
        skip: params.offset || 0,
        orderBy: { publishedAt: 'desc' },
      }),
      prisma.news.count({ where }),
    ])

    return { data, total }
  }

  async findBySlug(slug: string) {
    return prisma.news.findUnique({
      where: { slug },
      include: { category: true },
    })
  }

  async findById(id: string) {
    return prisma.news.findUnique({
      where: { id },
      include: { category: true },
    })
  }

  async create(data: any) {
    return prisma.news.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.news.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.news.delete({ where: { id } })
  }
}

export const newsAction = new NewsAction()
