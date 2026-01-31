export interface JwtPayload {
    userId: string;
    email: string;
    role: 'ADMIN' | 'EDITOR';
}
export interface AuthRequest extends Request {
    user?: JwtPayload;
}
export interface ApiResponse<T = any> {
    data: T;
    meta?: {
        total?: number;
        limit?: number;
        offset?: number;
    };
}
export interface ApiError {
    error: {
        code: string;
        message: string;
        details?: any[];
    };
}
export interface PaginationParams {
    limit?: number;
    offset?: number;
}
export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        total: number;
        limit: number;
        offset: number;
    };
}
//# sourceMappingURL=index.d.ts.map