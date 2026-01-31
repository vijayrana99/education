import { Response } from 'express'
import { homeSectionService } from '../services/homeSection.service'

export class HomeSectionController {
  async list(req: any, res: Response) {
    const sections = await homeSectionService.getHomeSections(req.query)
    res.json({ data: sections })
  }

  async getById(req: any, res: Response) {
    const section = await homeSectionService.getHomeSectionById(req.params.id)
    res.json({ data: section })
  }

  async create(req: any, res: Response) {
    const section = await homeSectionService.createHomeSection(req.body)
    res.status(201).json({ data: section })
  }

  async update(req: any, res: Response) {
    const section = await homeSectionService.updateHomeSection(req.params.id, req.body)
    res.json({ data: section })
  }

  async delete(req: any, res: Response) {
    await homeSectionService.deleteHomeSection(req.params.id)
    res.status(204).send()
  }
}

export const homeSectionController = new HomeSectionController()
