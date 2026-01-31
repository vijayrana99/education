import { newsAction } from '../actions/news.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class NewsService {
  async getNews(params: any) {
    return newsAction.findAll(params)
  }

  async getNewsBySlug(slug: string) {
    const news = await newsAction.findBySlug(slug)
    if (!news) throw new ApiError('NOT_FOUND', 'News not found', 404)
    return news
  }

  async getNewsById(id: string) {
    const news = await newsAction.findById(id)
    if (!news) throw new ApiError('NOT_FOUND', 'News not found', 404)
    return news
  }

  async createNews(data: any) {
    return newsAction.create(data)
  }

  async updateNews(id: string, data: any) {
    return newsAction.update(id, data)
  }

  async deleteNews(id: string) {
    return newsAction.delete(id)
  }
}

export const newsService = new NewsService()
