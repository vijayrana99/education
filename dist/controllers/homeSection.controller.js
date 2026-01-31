"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeSectionController = exports.HomeSectionController = void 0;
const homeSection_service_1 = require("../services/homeSection.service");
class HomeSectionController {
    async list(req, res) {
        const sections = await homeSection_service_1.homeSectionService.getHomeSections(req.query);
        res.json({ data: sections });
    }
    async getById(req, res) {
        const section = await homeSection_service_1.homeSectionService.getHomeSectionById(req.params.id);
        res.json({ data: section });
    }
    async create(req, res) {
        const section = await homeSection_service_1.homeSectionService.createHomeSection(req.body);
        res.status(201).json({ data: section });
    }
    async update(req, res) {
        const section = await homeSection_service_1.homeSectionService.updateHomeSection(req.params.id, req.body);
        res.json({ data: section });
    }
    async delete(req, res) {
        await homeSection_service_1.homeSectionService.deleteHomeSection(req.params.id);
        res.status(204).send();
    }
}
exports.HomeSectionController = HomeSectionController;
exports.homeSectionController = new HomeSectionController();
//# sourceMappingURL=homeSection.controller.js.map