import { eventAction } from '../actions/event.action'
import { ApiError } from '../middlewares/errorHandler.middleware'

export class EventService {
  async getEvents(params: any) {
    return eventAction.findAll(params)
  }

  async getEventBySlug(slug: string) {
    const event = await eventAction.findBySlug(slug)
    if (!event) throw new ApiError('NOT_FOUND', 'Event not found', 404)
    return event
  }

  async getEventById(id: string) {
    const event = await eventAction.findById(id)
    if (!event) throw new ApiError('NOT_FOUND', 'Event not found', 404)
    return event
  }

  async createEvent(data: any) {
    return eventAction.create(data)
  }

  async updateEvent(id: string, data: any) {
    return eventAction.update(id, data)
  }

  async deleteEvent(id: string) {
    return eventAction.delete(id)
  }
}

export const eventService = new EventService()
