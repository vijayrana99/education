export interface CreatePageInput {
    title: string;
    slug: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}
export interface UpdatePageInput extends Partial<CreatePageInput> {
}
export declare class PageService {
    getPages(params: {
        limit?: number;
        offset?: number;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            title: string;
            slug: string;
            metaTitle: string | null;
            metaDescription: string | null;
            status: import(".prisma/client").$Enums.ContentStatus;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    getPageBySlug(slug: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPageById(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createPage(data: CreatePageInput): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePage(id: string, data: UpdatePageInput): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deletePage(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare const pageService: PageService;
//# sourceMappingURL=page.service.d.ts.map