export declare class NewsAction {
    findAll(params: {
        limit?: number;
        offset?: number;
        categoryId?: string;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            title: string;
            slug: string;
            createdAt: Date;
            excerpt: string | null;
            image: string | null;
            author: string | null;
            publishedAt: Date | null;
            category: {
                id: string;
                slug: string;
                name: string;
            };
        }[];
        total: number;
    }>;
    findBySlug(slug: string): Promise<({
        category: {
            id: string;
            slug: string;
            createdAt: Date;
            name: string;
            description: string | null;
        };
    } & {
        id: string;
        title: string;
        slug: string;
        content: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        excerpt: string | null;
        image: string | null;
        author: string | null;
        publishedAt: Date | null;
    }) | null>;
    findById(id: string): Promise<({
        category: {
            id: string;
            slug: string;
            createdAt: Date;
            name: string;
            description: string | null;
        };
    } & {
        id: string;
        title: string;
        slug: string;
        content: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        excerpt: string | null;
        image: string | null;
        author: string | null;
        publishedAt: Date | null;
    }) | null>;
    create(data: any): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        excerpt: string | null;
        image: string | null;
        author: string | null;
        publishedAt: Date | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        excerpt: string | null;
        image: string | null;
        author: string | null;
        publishedAt: Date | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        content: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        excerpt: string | null;
        image: string | null;
        author: string | null;
        publishedAt: Date | null;
    }>;
}
export declare const newsAction: NewsAction;
//# sourceMappingURL=news.action.d.ts.map