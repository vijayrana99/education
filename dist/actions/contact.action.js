"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactAction = exports.ContactAction = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class ContactAction {
    async create(data) {
        return prisma_1.default.contactSubmission.create({ data });
    }
    async findAll(params) {
        const where = {};
        if (params.status)
            where.status = params.status;
        const [data, total] = await Promise.all([
            prisma_1.default.contactSubmission.findMany({
                where,
                take: params.limit || 10,
                skip: params.offset || 0,
                orderBy: { createdAt: 'desc' },
            }),
            prisma_1.default.contactSubmission.count({ where }),
        ]);
        return { data, total };
    }
    async findById(id) {
        return prisma_1.default.contactSubmission.findUnique({ where: { id } });
    }
    async updateStatus(id, status) {
        return prisma_1.default.contactSubmission.update({ where: { id }, data: { status } });
    }
}
exports.ContactAction = ContactAction;
exports.contactAction = new ContactAction();
//# sourceMappingURL=contact.action.js.map