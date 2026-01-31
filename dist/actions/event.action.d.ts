export declare class EventAction {
    findAll(params: {
        limit?: number;
        offset?: number;
        startDateFrom?: string;
        startDateTo?: string;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            title: string;
            slug: string;
            status: import(".prisma/client").$Enums.ContentStatus;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            location: string | null;
            startDate: Date;
            endDate: Date | null;
        }[];
        total: number;
    }>;
    findBySlug(slug: string): Promise<{
        id: string;
        title: string;
        slug: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        location: string | null;
        startDate: Date;
        endDate: Date | null;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        location: string | null;
        startDate: Date;
        endDate: Date | null;
    } | null>;
    create(data: any): Promise<{
        id: string;
        title: string;
        slug: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        location: string | null;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        title: string;
        slug: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        location: string | null;
        startDate: Date;
        endDate: Date | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        location: string | null;
        startDate: Date;
        endDate: Date | null;
    }>;
}
export declare const eventAction: EventAction;
//# sourceMappingURL=event.action.d.ts.map