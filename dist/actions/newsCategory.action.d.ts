export declare class NewsCategoryAction {
    findAll(): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }[]>;
    findBySlug(slug: string): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    } | null>;
    create(data: any): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        slug: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>;
}
export declare const newsCategoryAction: NewsCategoryAction;
//# sourceMappingURL=newsCategory.action.d.ts.map