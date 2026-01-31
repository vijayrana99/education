import { Response } from 'express'
import { newsService } from '../services/news.service'

export class NewsController {
  async list(req: any, res: Response) {
    const result = await newsService.getNews(req.query)
    res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } })
  }

  async getBySlug(req: any, res: Response) {
    const news = await newsService.getNewsBySlug(req.params.slug)
    res.json({ data: news })
  }

  async getById(req: any, res: Response) {
    const news = await newsService.getNewsById(req.params.id)
    res.json({ data: news })
  }

  async create(req: any, res: Response) {
    const news = await newsService.createNews(req.body)
    res.status(201).json({ data: news })
  }

  async update(req: any, res: Response) {
    const news = await newsService.updateNews(req.params.id, req.body)
    res.json({ data: news })
  }

  async delete(req: any, res: Response) {
    await newsService.deleteNews(req.params.id)
    res.status(204).send()
  }
}

export const newsController = new NewsController()
