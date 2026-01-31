export declare class StaffService {
    getStaff(params: any): Promise<{
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
    getStaffById(id: string): Promise<{
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
    createStaff(data: any): Promise<{
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
    updateStaff(id: string, data: any): Promise<{
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
    deleteStaff(id: string): Promise<{
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
export declare const staffService: StaffService;
//# sourceMappingURL=staff.service.d.ts.map