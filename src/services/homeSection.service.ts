import { homeSectionAction } from '../actions/homeSection.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class HomeSectionService {
  async getHomeSections(params: any) {
    return homeSectionAction.findAll(params)
  }

  async getHomeSectionById(id: string) {
    const section = await homeSectionAction.findById(id)
    if (!section) throw new ApiError('NOT_FOUND', 'Home section not found', 404)
    return section
  }

  async createHomeSection(data: any) {
    return homeSectionAction.create(data)
  }

  async updateHomeSection(id: string, data: any) {
    return homeSectionAction.update(id, data)
  }

  async deleteHomeSection(id: string) {
    return homeSectionAction.delete(id)
  }
}

export const homeSectionService = new HomeSectionService()
