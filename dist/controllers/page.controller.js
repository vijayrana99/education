"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageController = exports.PageController = void 0;
const page_service_1 = require("../services/page.service");
class PageController {
    async list(req, res) {
        const { limit, offset, status } = req.query;
        const result = await page_service_1.pageService.getPages({
            limit: limit ? parseInt(limit) : undefined,
            offset: offset ? parseInt(offset) : undefined,
            status: status,
        });
        res.json({ data: result.data, meta: { total: result.total, limit: result.data.length, offset: offset ? parseInt(offset) : 0 } });
    }
    async getById(req, res) {
        const page = await page_service_1.pageService.getPageById(req.params.id);
        res.json({ data: page });
    }
    async create(req, res) {
        const page = await page_service_1.pageService.createPage(req.body);
        res.status(201).json({ data: page });
    }
    async update(req, res) {
        const page = await page_service_1.pageService.updatePage(req.params.id, req.body);
        res.json({ data: page });
    }
    async delete(req, res) {
        await page_service_1.pageService.deletePage(req.params.id);
        res.status(204).send();
    }
}
exports.PageController = PageController;
exports.pageController = new PageController();
//# sourceMappingURL=page.controller.js.map