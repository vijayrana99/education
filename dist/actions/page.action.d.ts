export declare class PageAction {
    findAll(params: {
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
    findBySlug(slug: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        metaTitle: string | null;
        metaDescription: string | null;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(data: any): Promise<{
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
    update(id: string, data: any): Promise<{
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
    delete(id: string): Promise<{
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
export declare const pageAction: PageAction;
//# sourceMappingURL=page.action.d.ts.map