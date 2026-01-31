import { z } from 'zod';
import { createPageSchema, updatePageSchema } from './page.validator';
import { contactSchema } from './contact.validator';
declare const newsSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
declare const eventSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    startDate: z.ZodCoercedDate<unknown>;
    endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    image: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
declare const staffSchema: z.ZodObject<{
    name: z.ZodString;
    position: z.ZodString;
    department: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
declare const menuSchema: z.ZodObject<{
    name: z.ZodString;
    location: z.ZodEnum<{
        HEADER: "HEADER";
        FOOTER: "FOOTER";
    }>;
    parentId: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    url: z.ZodString;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
declare const homeSectionSchema: z.ZodObject<{
    type: z.ZodEnum<{
        HERO: "HERO";
        WELCOME: "WELCOME";
        FEATURES: "FEATURES";
        SPOTLIGHT: "SPOTLIGHT";
        NOTICES: "NOTICES";
    }>;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodString>;
    linkText: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
declare const galleryAlbumSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    coverImage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const galleryImageSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodString;
    caption: z.ZodOptional<z.ZodString>;
    displayOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export { createPageSchema, updatePageSchema, contactSchema, newsSchema, eventSchema, staffSchema, menuSchema, homeSectionSchema, galleryAlbumSchema, galleryImageSchema };
//# sourceMappingURL=index.d.ts.map