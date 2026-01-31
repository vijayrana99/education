"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeSectionService = exports.HomeSectionService = void 0;
const homeSection_action_1 = require("../actions/homeSection.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class HomeSectionService {
    async getHomeSections(params) {
        return homeSection_action_1.homeSectionAction.findAll(params);
    }
    async getHomeSectionById(id) {
        const section = await homeSection_action_1.homeSectionAction.findById(id);
        if (!section)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Home section not found', 404);
        return section;
    }
    async createHomeSection(data) {
        return homeSection_action_1.homeSectionAction.create(data);
    }
    async updateHomeSection(id, data) {
        return homeSection_action_1.homeSectionAction.update(id, data);
    }
    async deleteHomeSection(id) {
        return homeSection_action_1.homeSectionAction.delete(id);
    }
}
exports.HomeSectionService = HomeSectionService;
exports.homeSectionService = new HomeSectionService();
//# sourceMappingURL=homeSection.service.js.map