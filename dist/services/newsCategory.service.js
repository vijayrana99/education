"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsCategoryService = exports.NewsCategoryService = void 0;
const newsCategory_action_1 = require("../actions/newsCategory.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class NewsCategoryService {
    async getCategories() {
        return newsCategory_action_1.newsCategoryAction.findAll();
    }
    async getCategoryBySlug(slug) {
        const category = await newsCategory_action_1.newsCategoryAction.findBySlug(slug);
        if (!category)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'Category not found', 404);
        return category;
    }
    async createCategory(data) {
        return newsCategory_action_1.newsCategoryAction.create(data);
    }
    async updateCategory(id, data) {
        return newsCategory_action_1.newsCategoryAction.update(id, data);
    }
    async deleteCategory(id) {
        return newsCategory_action_1.newsCategoryAction.delete(id);
    }
}
exports.NewsCategoryService = NewsCategoryService;
exports.newsCategoryService = new NewsCategoryService();
//# sourceMappingURL=newsCategory.service.js.map