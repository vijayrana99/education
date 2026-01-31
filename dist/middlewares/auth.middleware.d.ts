import { Request, Response, NextFunction } from 'express';
export interface JwtPayload {
    userId: string;
    email: string;
    role: 'ADMIN' | 'EDITOR';
}
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
export declare function auth(req: Request, _res: Response, next: NextFunction): void;
export declare function requireRole(role: 'ADMIN' | 'EDITOR'): (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map