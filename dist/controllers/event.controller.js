"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventController = exports.EventController = void 0;
const event_service_1 = require("../services/event.service");
class EventController {
    async list(req, res) {
        const result = await event_service_1.eventService.getEvents(req.query);
        res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } });
    }
    async getBySlug(req, res) {
        const event = await event_service_1.eventService.getEventBySlug(req.params.slug);
        res.json({ data: event });
    }
    async getById(req, res) {
        const event = await event_service_1.eventService.getEventById(req.params.id);
        res.json({ data: event });
    }
    async create(req, res) {
        const event = await event_service_1.eventService.createEvent(req.body);
        res.status(201).json({ data: event });
    }
    async update(req, res) {
        const event = await event_service_1.eventService.updateEvent(req.params.id, req.body);
        res.json({ data: event });
    }
    async delete(req, res) {
        await event_service_1.eventService.deleteEvent(req.params.id);
        res.status(204).send();
    }
}
exports.EventController = EventController;
exports.eventController = new EventController();
//# sourceMappingURL=event.controller.js.map