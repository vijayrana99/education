"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsAction = exports.NewsAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class NewsAction {
    async findAll(params) {
        const where = {};
        if (params.categoryId)
            where.categoryId = params.categoryId;
        if (params.status)
            where.status = params.status;
        const [data, total] = await Promise.all([
            prisma_1.default.news.findMany({
                where,
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    excerpt: true,
                    image: true,
                    author: true,
                    publishedAt: true,
                    category: { select: { id: true, name: true, slug: true } },
                    createdAt: true,
                },
                take: params.limit || 10,
                skip: params.offset || 0,
                orderBy: { publishedAt: 'desc' },
            }),
            prisma_1.default.news.count({ where }),
        ]);
        return { data, total };
    }
    async findBySlug(slug) {
        return prisma_1.default.news.findUnique({
            where: { slug },
            include: { category: true },
        });
    }
    async findById(id) {
        return prisma_1.default.news.findUnique({
            where: { id },
            include: { category: true },
        });
    }
    async create(data) {
        return prisma_1.default.news.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.news.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.news.delete({ where: { id } });
    }
}
exports.NewsAction = NewsAction;
exports.newsAction = new NewsAction();
//# sourceMappingURL=news.action.js.map