import {z} from 'zod'

export const deliverieSchema = z.object({
    from: z.string(),
    to: z.string(),
    description: z.string(),
    rider: z.string(),
    date: z.date(),
    timeToDeliver: z.string(),
    delivered: z.boolean(),
    notes: z.string().optional(),
    status: z.string(),
  });