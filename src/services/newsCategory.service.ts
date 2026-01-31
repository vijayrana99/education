import { newsCategoryAction } from '../actions/newsCategory.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class NewsCategoryService {
  async getCategories() {
    return newsCategoryAction.findAll()
  }

  async getCategoryBySlug(slug: string) {
    const category = await newsCategoryAction.findBySlug(slug)
    if (!category) throw new ApiError('NOT_FOUND', 'Category not found', 404)
    return category
  }

  async createCategory(data: any) {
    return newsCategoryAction.create(data)
  }

  async updateCategory(id: string, data: any) {
    return newsCategoryAction.update(id, data)
  }

  async deleteCategory(id: string) {
    return newsCategoryAction.delete(id)
  }
}

export const newsCategoryService = new NewsCategoryService()
