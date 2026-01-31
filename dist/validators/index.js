"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryImageSchema = exports.galleryAlbumSchema = exports.homeSectionSchema = exports.menuSchema = exports.staffSchema = exports.eventSchema = exports.newsSchema = exports.contactSchema = exports.updatePageSchema = exports.createPageSchema = void 0;
const zod_1 = require("zod");
const page_validator_1 = require("./page.validator");
Object.defineProperty(exports, "createPageSchema", { enumerable: true, get: function () { return page_validator_1.createPageSchema; } });
Object.defineProperty(exports, "updatePageSchema", { enumerable: true, get: function () { return page_validator_1.updatePageSchema; } });
const contact_validator_1 = require("./contact.validator");
Object.defineProperty(exports, "contactSchema", { enumerable: true, get: function () { return contact_validator_1.contactSchema; } });
const newsSchema = zod_1.z.object({
    title: zod_1.z.string().min(2, 'Title must be at least 2 characters'),
    slug: zod_1.z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    excerpt: zod_1.z.string().optional(),
    content: zod_1.z.string().min(1, 'Content is required'),
    image: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    categoryId: zod_1.z.string().uuid('Invalid category ID'),
    status: zod_1.z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
});
exports.newsSchema = newsSchema;
const eventSchema = zod_1.z.object({
    title: zod_1.z.string().min(2, 'Title must be at least 2 characters'),
    slug: zod_1.z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    description: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    startDate: zod_1.z.coerce.date('Start date is required'),
    endDate: zod_1.z.coerce.date('End date is required').optional(),
    image: zod_1.z.string().optional(),
    status: zod_1.z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
});
exports.eventSchema = eventSchema;
const staffSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters'),
    position: zod_1.z.string().min(2, 'Position is required'),
    department: zod_1.z.string().optional(),
    email: zod_1.z.string().email('Invalid email format').optional(),
    phone: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    displayOrder: zod_1.z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
    status: zod_1.z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
});
exports.staffSchema = staffSchema;
const menuSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name is required'),
    location: zod_1.z.enum(['HEADER', 'FOOTER'], 'Location must be HEADER or FOOTER'),
    parentId: zod_1.z.string().uuid('Invalid parent ID').optional(),
    title: zod_1.z.string().min(2, 'Title is required'),
    url: zod_1.z.string().min(1, 'URL is required'),
    displayOrder: zod_1.z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
});
exports.menuSchema = menuSchema;
const homeSectionSchema = zod_1.z.object({
    type: zod_1.z.enum(['HERO', 'WELCOME', 'FEATURES', 'SPOTLIGHT', 'NOTICES'], 'Type is required'),
    title: zod_1.z.string().optional(),
    subtitle: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    link: zod_1.z.string().url('Link must be a valid URL').optional(),
    linkText: zod_1.z.string().optional(),
    displayOrder: zod_1.z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
    status: zod_1.z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
});
exports.homeSectionSchema = homeSectionSchema;
const galleryAlbumSchema = zod_1.z.object({
    title: zod_1.z.string().min(2, 'Title must be at least 2 characters'),
    slug: zod_1.z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    description: zod_1.z.string().optional(),
    coverImage: zod_1.z.string().optional(),
});
exports.galleryAlbumSchema = galleryAlbumSchema;
const galleryImageSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().min(1, 'Image URL is required'),
    caption: zod_1.z.string().optional(),
    displayOrder: zod_1.z.number().int('Display order must be an integer').min(0, 'Display order must be non-negative').optional(),
});
exports.galleryImageSchema = galleryImageSchema;
//# sourceMappingURL=index.js.map