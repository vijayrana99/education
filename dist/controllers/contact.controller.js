"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = exports.ContactController = void 0;
const contact_service_1 = require("../services/contact.service");
class ContactController {
    async submit(req, res) {
        const submission = await contact_service_1.contactService.submitContact(req.body);
        res.status(201).json({ data: submission });
    }
    async list(req, res) {
        const result = await contact_service_1.contactService.getContactSubmissions(req.query);
        res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } });
    }
    async getById(req, res) {
        const submission = await contact_service_1.contactService.getContactSubmission(req.params.id);
        res.json({ data: submission });
    }
    async updateStatus(req, res) {
        const submission = await contact_service_1.contactService.updateContactStatus(req.params.id, req.body.status);
        res.json({ data: submission });
    }
}
exports.ContactController = ContactController;
exports.contactController = new ContactController();
//# sourceMappingURL=contact.controller.js.map