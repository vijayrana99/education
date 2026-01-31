"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageAction = exports.PageAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class PageAction {
    async findAll(params) {
        const [data, total] = await Promise.all([
            prisma_1.default.page.findMany({
                where: params.status ? { status: params.status } : undefined,
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    metaTitle: true,
                    metaDescription: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                },
                take: params.limit || 10,
                skip: params.offset || 0,
                orderBy: { createdAt: 'desc' },
            }),
            prisma_1.default.page.count(params.status ? { where: { status: params.status } } : undefined),
        ]);
        return { data, total };
    }
    async findBySlug(slug) {
        return prisma_1.default.page.findUnique({
            where: { slug },
        });
    }
    async findById(id) {
        return prisma_1.default.page.findUnique({
            where: { id },
        });
    }
    async create(data) {
        return prisma_1.default.page.create({
            data,
        });
    }
    async update(id, data) {
        return prisma_1.default.page.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return prisma_1.default.page.delete({
            where: { id },
        });
    }
}
exports.PageAction = PageAction;
exports.pageAction = new PageAction();
//# sourceMappingURL=page.action.js.map