"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePageSchema = exports.createPageSchema = void 0;
const zod_1 = require("zod");
exports.createPageSchema = zod_1.z.object({
    title: zod_1.z.string().min(2, 'Title must be at least 2 characters'),
    slug: zod_1.z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    content: zod_1.z.string().min(1, 'Content is required'),
    metaTitle: zod_1.z.string().optional(),
    metaDescription: zod_1.z.string().optional(),
    status: zod_1.z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
});
exports.updatePageSchema = exports.createPageSchema.partial();
//# sourceMappingURL=page.validator.js.map