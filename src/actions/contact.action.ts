import prisma from '../lib/prisma'

export class ContactAction {
  async create(data: any) {
    return prisma.contactSubmission.create({ data })
  }

  async findAll(params: { limit?: number; offset?: number; status?: string }) {
    const where: any = {}
    if (params.status) where.status = params.status

    const [data, total] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        take: params.limit || 10,
        skip: params.offset || 0,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactSubmission.count({ where }),
    ])

    return { data, total }
  }

  async findById(id: string) {
    return prisma.contactSubmission.findUnique({ where: { id } })
  }

  async updateStatus(id: string, status: 'NEW' | 'READ' | 'RESPONDED') {
    return prisma.contactSubmission.update({ where: { id }, data: { status } })
  }
}

export const contactAction = new ContactAction()
