import prisma from '../lib/prisma'

export class HomeSectionAction {
  async findAll(params: { type?: string; status?: string }) {
    return prisma.homeSection.findMany({
      where: { type: params.type as any, status: params.status as any },
      orderBy: { displayOrder: 'asc' },
    })
  }

  async findById(id: string) {
    return prisma.homeSection.findUnique({ where: { id } })
  }

  async create(data: any) {
    return prisma.homeSection.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.homeSection.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.homeSection.delete({ where: { id } })
  }
}

export const homeSectionAction = new HomeSectionAction()
