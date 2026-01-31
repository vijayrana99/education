import { Response } from 'express'
import { staffService } from '../services/staff.service'

export class StaffController {
  async list(req: any, res: Response) {
    const result = await staffService.getStaff(req.query)
    res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 20, offset: req.query.offset || 0 } })
  }

  async getById(req: any, res: Response) {
    const staff = await staffService.getStaffById(req.params.id)
    res.json({ data: staff })
  }

  async create(req: any, res: Response) {
    const staff = await staffService.createStaff(req.body)
    res.status(201).json({ data: staff })
  }

  async update(req: any, res: Response) {
    const staff = await staffService.updateStaff(req.params.id, req.body)
    res.json({ data: staff })
  }

  async delete(req: any, res: Response) {
    await staffService.deleteStaff(req.params.id)
    res.status(204).send()
  }
}

export const staffController = new StaffController()
