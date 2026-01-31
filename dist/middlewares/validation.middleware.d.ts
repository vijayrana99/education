import { Request, Response, NextFunction } from 'express';
import { ZodTypeAny } from 'zod';
export declare function validate(schema: ZodTypeAny): (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=validation.middleware.d.ts.map