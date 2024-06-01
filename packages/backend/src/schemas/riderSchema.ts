import { z } from 'zod'

export const riderSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    phoneNumber: z.number(),
    email: z.string().email(),
    notes: z.string().optional(),
  });