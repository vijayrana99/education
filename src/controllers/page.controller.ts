import { Response } from 'express'
import { pageService } from '../services/page.service'

export class PageController {
  async list(req: any, res: Response) {
    const { limit, offset, status } = req.query
    const result = await pageService.getPages({
      limit: limit ? parseInt(limit as string) : undefined,
      offset: offset ? parseInt(offset as string) : undefined,
      status: status as string,
    })
    res.json({ data: result.data, meta: { total: result.total, limit: result.data.length, offset: offset ? parseInt(offset as string) : 0 } })
  }

  async getById(req: any, res: Response) {
    const page = await pageService.getPageById(req.params.id)
    res.json({ data: page })
  }

  async create(req: any, res: Response) {
    const page = await pageService.createPage(req.body)
    res.status(201).json({ data: page })
  }

  async update(req: any, res: Response) {
    const page = await pageService.updatePage(req.params.id, req.body)
    res.json({ data: page })
  }

  async delete(req: any, res: Response) {
    await pageService.deletePage(req.params.id)
    res.status(204).send()
  }
}

export const pageController = new PageController()
