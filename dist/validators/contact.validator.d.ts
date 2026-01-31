import { z } from 'zod';
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    subject: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=contact.validator.d.ts.map