import { Response } from 'express';
export declare class EventController {
    list(req: any, res: Response): Promise<void>;
    getBySlug(req: any, res: Response): Promise<void>;
    getById(req: any, res: Response): Promise<void>;
    create(req: any, res: Response): Promise<void>;
    update(req: any, res: Response): Promise<void>;
    delete(req: any, res: Response): Promise<void>;
}
export declare const eventController: EventController;
//# sourceMappingURL=event.controller.d.ts.map