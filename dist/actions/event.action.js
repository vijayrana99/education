"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventAction = exports.EventAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class EventAction {
    async findAll(params) {
        const where = {};
        if (params.startDateFrom)
            where.startDate = { ...where.startDate, gte: new Date(params.startDateFrom) };
        if (params.startDateTo)
            where.startDate = { ...where.startDate, lte: new Date(params.startDateTo) };
        if (params.status)
            where.status = params.status;
        const [data, total] = await Promise.all([
            prisma_1.default.event.findMany({
                where,
                take: params.limit || 10,
                skip: params.offset || 0,
                orderBy: { startDate: 'asc' },
            }),
            prisma_1.default.event.count({ where }),
        ]);
        return { data, total };
    }
    async findBySlug(slug) {
        return prisma_1.default.event.findUnique({ where: { slug } });
    }
    async findById(id) {
        return prisma_1.default.event.findUnique({ where: { id } });
    }
    async create(data) {
        return prisma_1.default.event.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.event.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.event.delete({ where: { id } });
    }
}
exports.EventAction = EventAction;
exports.eventAction = new EventAction();
//# sourceMappingURL=event.action.js.map