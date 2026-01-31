export interface LoginInput {
    email: string;
    password: string;
}
export declare function login(input: LoginInput): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: import(".prisma/client").$Enums.UserRole;
    };
}>;
export declare function getMe(userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    role: import(".prisma/client").$Enums.UserRole;
}>;
//# sourceMappingURL=auth.service.d.ts.map