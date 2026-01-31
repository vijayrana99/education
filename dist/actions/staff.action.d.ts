export declare class StaffAction {
    findAll(params: {
        limit?: number;
        offset?: number;
        department?: string;
        status?: string;
    }): Promise<{
        data: {
            id: string;
            status: import(".prisma/client").$Enums.ContentStatus;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            image: string | null;
            position: string;
            department: string | null;
            email: string | null;
            phone: string | null;
            bio: string | null;
            displayOrder: number;
        }[];
        total: number;
    }>;
    findById(id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        position: string;
        department: string | null;
        email: string | null;
        phone: string | null;
        bio: string | null;
        displayOrder: number;
    } | null>;
    create(data: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        position: string;
        department: string | null;
        email: string | null;
        phone: string | null;
        bio: string | null;
        displayOrder: number;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        position: string;
        department: string | null;
        email: string | null;
        phone: string | null;
        bio: string | null;
        displayOrder: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ContentStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        position: string;
        department: string | null;
        email: string | null;
        phone: string | null;
        bio: string | null;
        displayOrder: number;
    }>;
}
export declare const staffAction: StaffAction;
//# sourceMappingURL=staff.action.d.ts.map