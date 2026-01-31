"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffController = exports.StaffController = void 0;
const staff_service_1 = require("../services/staff.service");
class StaffController {
    async list(req, res) {
        const result = await staff_service_1.staffService.getStaff(req.query);
        res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 20, offset: req.query.offset || 0 } });
    }
    async getById(req, res) {
        const staff = await staff_service_1.staffService.getStaffById(req.params.id);
        res.json({ data: staff });
    }
    async create(req, res) {
        const staff = await staff_service_1.staffService.createStaff(req.body);
        res.status(201).json({ data: staff });
    }
    async update(req, res) {
        const staff = await staff_service_1.staffService.updateStaff(req.params.id, req.body);
        res.json({ data: staff });
    }
    async delete(req, res) {
        await staff_service_1.staffService.deleteStaff(req.params.id);
        res.status(204).send();
    }
}
exports.StaffController = StaffController;
exports.staffController = new StaffController();
//# sourceMappingURL=staff.controller.js.map