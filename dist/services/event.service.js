"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventService = exports.EventService = void 0;
const event_action_1 = require("../actions/event.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class EventService {
    async getEvents(params) {
        return event_action_1.eventAction.findAll(params);
    }
    async getEventBySlug(slug) {
        const event = await event_action_1.eventAction.findBySlug(slug);
        if (!event)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Event not found', 404);
        return event;
    }
    async getEventById(id) {
        const event = await event_action_1.eventAction.findById(id);
        if (!event)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Event not found', 404);
        return event;
    }
    async createEvent(data) {
        return event_action_1.eventAction.create(data);
    }
    async updateEvent(id, data) {
        return event_action_1.eventAction.update(id, data);
    }
    async deleteEvent(id) {
        return event_action_1.eventAction.delete(id);
    }
}
exports.EventService = EventService;
exports.eventService = new EventService();
//# sourceMappingURL=event.service.js.map