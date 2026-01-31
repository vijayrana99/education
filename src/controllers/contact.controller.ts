import { Response } from 'express'
import { contactService } from '../services/contact.service'

export class ContactController {
  async submit(req: any, res: Response) {
    const submission = await contactService.submitContact(req.body)
    res.status(201).json({ data: submission })
  }

  async list(req: any, res: Response) {
    const result = await contactService.getContactSubmissions(req.query)
    res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } })
  }

  async getById(req: any, res: Response) {
    const submission = await contactService.getContactSubmission(req.params.id)
    res.json({ data: submission })
  }

  async updateStatus(req: any, res: Response) {
    const submission = await contactService.updateContactStatus(req.params.id, req.body.status)
    res.json({ data: submission })
  }
}

export const contactController = new ContactController()
