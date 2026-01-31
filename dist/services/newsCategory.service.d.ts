export declare class NewsCategoryService {
    getCategories(): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }[]>;
    getCategoryBySlug(slug: string): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
    createCategory(data: any): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
    updateCategory(id: string, data: any): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
    deleteCategory(id: string): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
}
export declare const newsCategoryService: NewsCategoryService;
//# sourceMappingURL=newsCategory.service.d.ts.map