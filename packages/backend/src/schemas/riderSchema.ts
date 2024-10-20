import { z } from 'zod';

export const riderSchema = z.object({
  id: z.number().optional(), 
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  phoneNumber: z.coerce.number().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  notes: z.string().optional()
});

export type Rider = z.infer<typeof riderSchema>;