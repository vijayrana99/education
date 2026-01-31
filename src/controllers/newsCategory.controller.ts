import { Response } from 'express'
import { newsCategoryService } from '../services/newsCategory.service'

export class NewsCategoryController {
  async list(_req: any, res: Response) {
    const categories = await newsCategoryService.getCategories()
    res.json({ data: categories })
  }

  async getBySlug(req: any, res: Response) {
    const category = await newsCategoryService.getCategoryBySlug(req.params.slug)
    res.json({ data: category })
  }

  async create(req: any, res: Response) {
    const category = await newsCategoryService.createCategory(req.body)
    res.status(201).json({ data: category })
  }

  async update(req: any, res: Response) {
    const category = await newsCategoryService.updateCategory(req.params.id, req.body)
    res.json({ data: category })
  }

  async delete(req: any, res: Response) {
    await newsCategoryService.deleteCategory(req.params.id)
    res.status(204).send()
  }
}

export const newsCategoryController = new NewsCategoryController()
