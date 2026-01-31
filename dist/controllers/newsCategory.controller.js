"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsCategoryController = exports.NewsCategoryController = void 0;
const newsCategory_service_1 = require("../services/newsCategory.service");
class NewsCategoryController {
    async list(_req, res) {
        const categories = await newsCategory_service_1.newsCategoryService.getCategories();
        res.json({ data: categories });
    }
    async getBySlug(req, res) {
        const category = await newsCategory_service_1.newsCategoryService.getCategoryBySlug(req.params.slug);
        res.json({ data: category });
    }
    async create(req, res) {
        const category = await newsCategory_service_1.newsCategoryService.createCategory(req.body);
        res.status(201).json({ data: category });
    }
    async update(req, res) {
        const category = await newsCategory_service_1.newsCategoryService.updateCategory(req.params.id, req.body);
        res.json({ data: category });
    }
    async delete(req, res) {
        await newsCategory_service_1.newsCategoryService.deleteCategory(req.params.id);
        res.status(204).send();
    }
}
exports.NewsCategoryController = NewsCategoryController;
exports.newsCategoryController = new NewsCategoryController();
//# sourceMappingURL=newsCategory.controller.js.map