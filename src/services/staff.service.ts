import { staffAction } from '../actions/staff.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class StaffService {
  async getStaff(params: any) {
    return staffAction.findAll(params)
  }

  async getStaffById(id: string) {
    const staff = await staffAction.findById(id)
    if (!staff) throw new ApiError('NOT_FOUND', 'Staff not found', 404)
    return staff
  }

  async createStaff(data: any) {
    return staffAction.create(data)
  }

  async updateStaff(id: string, data: any) {
    return staffAction.update(id, data)
  }

  async deleteStaff(id: string) {
    return staffAction.delete(id)
  }
}

export const staffService = new StaffService()
