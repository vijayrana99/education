import { pageAction } from '../actions/page.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export interface CreatePageInput {
  title: string
  slug: string
  content: string
  metaTitle?: string
  metaDescription?: string
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface UpdatePageInput extends Partial<CreatePageInput> {}

export class PageService {
  async getPages(params: { limit?: number; offset?: number; status?: string }) {
    return pageAction.findAll(params)
  }

  async getPageBySlug(slug: string) {
    const page = await pageAction.findBySlug(slug)
    if (!page) {
      throw new ApiError('NOT_FOUND', 'Page not found', 404)
    }
    return page
  }

  async getPageById(id: string) {
    const page = await pageAction.findById(id)
    if (!page) {
      throw new ApiError('NOT_FOUND', 'Page not found', 404)
    }
    return page
  }

  async createPage(data: CreatePageInput) {
    return pageAction.create(data)
  }

  async updatePage(id: string, data: UpdatePageInput) {
    const page = await pageAction.findById(id)
    if (!page) {
      throw new ApiError('NOT_FOUND', 'Page not found', 404)
    }
    return pageAction.update(id, data)
  }

  async deletePage(id: string) {
    const page = await pageAction.findById(id)
    if (!page) {
      throw new ApiError('NOT_FOUND', 'Page not found', 404)
    }
    return pageAction.delete(id)
  }
}

export const pageService = new PageService()
