import prisma from '../lib/prisma'

export class MenuAction {
  async findByLocation(location: 'HEADER' | 'FOOTER') {
    return prisma.menu.findMany({
      where: { location, parentId: null },
      orderBy: { displayOrder: 'asc' },
      include: { children: { orderBy: { displayOrder: 'asc' } } },
    })
  }

  async findById(id: string) {
    return prisma.menu.findUnique({ where: { id } })
  }

  async create(data: any) {
    return prisma.menu.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.menu.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.menu.delete({ where: { id } })
  }
}

export const menuAction = new MenuAction()
