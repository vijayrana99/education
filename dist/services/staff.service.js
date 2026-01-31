"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffService = exports.StaffService = void 0;
const staff_action_1 = require("../actions/staff.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class StaffService {
    async getStaff(params) {
        return staff_action_1.staffAction.findAll(params);
    }
    async getStaffById(id) {
        const staff = await staff_action_1.staffAction.findById(id);
        if (!staff)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Staff not found', 404);
        return staff;
    }
    async createStaff(data) {
        return staff_action_1.staffAction.create(data);
    }
    async updateStaff(id, data) {
        return staff_action_1.staffAction.update(id, data);
    }
    async deleteStaff(id) {
        return staff_action_1.staffAction.delete(id);
    }
}
exports.StaffService = StaffService;
exports.staffService = new StaffService();
//# sourceMappingURL=staff.service.js.map