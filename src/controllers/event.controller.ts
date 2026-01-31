import { Response } from 'express'
import { eventService } from '../services/event.service'

export class EventController {
  async list(req: any, res: Response) {
    const result = await eventService.getEvents(req.query)
    res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } })
  }

  async getBySlug(req: any, res: Response) {
    const event = await eventService.getEventBySlug(req.params.slug)
    res.json({ data: event })
  }

  async getById(req: any, res: Response) {
    const event = await eventService.getEventById(req.params.id)
    res.json({ data: event })
  }

  async create(req: any, res: Response) {
    const event = await eventService.createEvent(req.body)
    res.status(201).json({ data: event })
  }

  async update(req: any, res: Response) {
    const event = await eventService.updateEvent(req.params.id, req.body)
    res.json({ data: event })
  }

  async delete(req: any, res: Response) {
    await eventService.deleteEvent(req.params.id)
    res.status(204).send()
  }
}

export const eventController = new EventController()
