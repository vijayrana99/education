export declare class NewsService {
    getNews(params: any): Promise<{
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
    getNewsBySlug(slug: string): Promise<{
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
    }>;
    getNewsById(id: string): Promise<{
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
    }>;
    createNews(data: any): Promise<{
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
    updateNews(id: string, data: any): Promise<{
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
    deleteNews(id: string): Promise<{
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
export declare const newsService: NewsService;
//# sourceMappingURL=news.service.d.ts.map