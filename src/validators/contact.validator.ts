import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})
