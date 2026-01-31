"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageService = exports.PageService = void 0;
const page_action_1 = require("../actions/page.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class PageService {
    async getPages(params) {
        return page_action_1.pageAction.findAll(params);
    }
    async getPageBySlug(slug) {
        const page = await page_action_1.pageAction.findBySlug(slug);
        if (!page) {
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Page not found', 404);
        }
        return page;
    }
    async getPageById(id) {
        const page = await page_action_1.pageAction.findById(id);
        if (!page) {
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Page not found', 404);
        }
        return page;
    }
    async createPage(data) {
        return page_action_1.pageAction.create(data);
    }
    async updatePage(id, data) {
        const page = await page_action_1.pageAction.findById(id);
        if (!page) {
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Page not found', 404);
        }
        return page_action_1.pageAction.update(id, data);
    }
    async deletePage(id) {
        const page = await page_action_1.pageAction.findById(id);
        if (!page) {
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Page not found', 404);
        }
        return page_action_1.pageAction.delete(id);
    }
}
exports.PageService = PageService;
exports.pageService = new PageService();
//# sourceMappingURL=page.service.js.map