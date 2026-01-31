"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = exports.ContactService = void 0;
const contact_action_1 = require("../actions/contact.action");
class ContactService {
    async submitContact(data) {
        return contact_action_1.contactAction.create(data);
    }
    async getContactSubmissions(params) {
        return contact_action_1.contactAction.findAll(params);
    }
    async getContactSubmission(id) {
        return contact_action_1.contactAction.findById(id);
    }
    async updateContactStatus(id, status) {
        return contact_action_1.contactAction.updateStatus(id, status);
    }
}
exports.ContactService = ContactService;
exports.contactService = new ContactService();
//# sourceMappingURL=contact.service.js.map