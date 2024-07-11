import { z } from 'zod';

export const CreateUserSchema = z.object({
  fullname: z.string({ message: 'fullname is required and must be a string' }),
  phone_number: z.string({ message: 'phone_number is required and must be a string' }),
  password: z
    .string({ message: 'password is required and must be a string' })
    .min(6, { message: 'password required and min 6 character' })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
      message: 'password must contain at least one letter, one number, and one special character.',
    }),
});

export interface CreateUserDto {
  fullname: string;
  phone_number: string;
  password: string;
}
