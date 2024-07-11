import { z } from 'zod';

export const EmailSchema = z.object({
  email: z
    .string({ message: 'fullname is required and must be a string' })
    .email({ message: 'email invalid' }),
});

export interface EmailDto {
  email: string;
}
