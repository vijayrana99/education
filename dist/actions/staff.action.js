"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffAction = exports.StaffAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class StaffAction {
    async findAll(params) {
        const where = {};
        if (params.department)
            where.department = params.department;
        if (params.status)
            where.status = params.status;
        const [data, total] = await Promise.all([
            prisma_1.default.staff.findMany({
                where,
                take: params.limit || 20,
                skip: params.offset || 0,
                orderBy: [{ displayOrder: 'asc' }, { name: 'asc' }],
            }),
            prisma_1.default.staff.count({ where }),
        ]);
        return { data, total };
    }
    async findById(id) {
        return prisma_1.default.staff.findUnique({ where: { id } });
    }
    async create(data) {
        return prisma_1.default.staff.create({ data });
    }
    async update(id, data) {
        return prisma_1.default.staff.update({ where: { id }, data });
    }
    async delete(id) {
        return prisma_1.default.staff.delete({ where: { id } });
    }
}
exports.StaffAction = StaffAction;
exports.staffAction = new StaffAction();
//# sourceMappingURL=staff.action.js.map