export declare class EventService {
    getEvents(params: any): Promise<{
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
    getEventBySlug(slug: string): Promise<{
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
    getEventById(id: string): Promise<{
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
    createEvent(data: any): Promise<{
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
    updateEvent(id: string, data: any): Promise<{
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
    deleteEvent(id: string): Promise<{
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
export declare const eventService: EventService;
//# sourceMappingURL=event.service.d.ts.map