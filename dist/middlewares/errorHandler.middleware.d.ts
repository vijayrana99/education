import { Response, NextFunction } from 'express';
import { Request } from 'express';
export declare class ApiError extends Error {
    code: string;
    statusCode: number;
    details?: any[] | undefined;
    constructor(code: string, message: string, statusCode?: number, details?: any[] | undefined);
}
export declare function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=errorHandler.middleware.d.ts.map