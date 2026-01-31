import prisma from '../lib/prisma'

export class NewsCategoryAction {
  async findAll() {
    return prisma.newsCategory.findMany({
      orderBy: { name: 'asc' },
    })
  }

  async findBySlug(slug: string) {
    return prisma.newsCategory.findUnique({ where: { slug } })
  }

  async create(data: any) {
    return prisma.newsCategory.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.newsCategory.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.newsCategory.delete({ where: { id } })
  }
}

export const newsCategoryAction = new NewsCategoryAction()
