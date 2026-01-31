"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsCategoryAction = exports.NewsCategoryAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class NewsCategoryAction {
    async findAll() {
        return prisma_1.default.newsCategory.findMany({
            orderBy: { name: 'asc' },
        });
    }
    async findBySlug(slug) {
        return prisma_1.default.newsCategory.findUnique({ where: { slug } });
    }
    async create(data) {
        return prisma_1.default.newsCategory.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.newsCategory.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.newsCategory.delete({ where: { id } });
    }
}
exports.NewsCategoryAction = NewsCategoryAction;
exports.newsCategoryAction = new NewsCategoryAction();
//# sourceMappingURL=newsCategory.action.js.map