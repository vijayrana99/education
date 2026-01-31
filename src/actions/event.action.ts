import prisma from '../lib/prisma'

export class EventAction {
  async findAll(params: { limit?: number; offset?: number; startDateFrom?: string; startDateTo?: string; status?: string }) {
    const where: any = {}
    if (params.startDateFrom) where.startDate = { ...where.startDate, gte: new Date(params.startDateFrom) }
    if (params.startDateTo) where.startDate = { ...where.startDate, lte: new Date(params.startDateTo) }
    if (params.status) where.status = params.status

    const [data, total] = await Promise.all([
      prisma.event.findMany({
        where,
        take: params.limit || 10,
        skip: params.offset || 0,
        orderBy: { startDate: 'asc' },
      }),
      prisma.event.count({ where }),
    ])

    return { data, total }
  }

  async findBySlug(slug: string) {
    return prisma.event.findUnique({ where: { slug } })
  }

  async findById(id: string) {
    return prisma.event.findUnique({ where: { id } })
  }

  async create(data: any) {
    return prisma.event.create({ data })
  }

  async update(id: string, data: any) {
    return prisma.event.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.event.delete({ where: { id } })
  }
}

export const eventAction = new EventAction()
