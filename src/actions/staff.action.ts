import prisma from '../lib/prisma'

export class StaffAction {
  async findAll(params: { limit?: number; offset?: number; department?: string; status?: string }) {
    const where: any = {}
    if (params.department) where.department = params.department
    if (params.status) where.status = params.status

    const [data, total] = await Promise.all([
      prisma.staff.findMany({
        where,
        take: params.limit || 20,
        skip: params.offset || 0,
        orderBy: [{ displayOrder: 'asc' }, { name: 'asc' }],
      }),
      prisma.staff.count({ where }),
    ])

    return { data, total }
  }

  async findById(id: string) {
    return prisma.staff.findUnique({ where: { id } })
  }

  async create(data: any) {
    return prisma.staff.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.staff.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.staff.delete({ where: { id } })
  }
}

export const staffAction = new StaffAction()
