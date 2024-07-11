import { z } from 'zod';

export const CreateUserSchema = z.object({
  phone_number: z.string({ message: 'phone_number is required and must be a string' }),
  password: z.string({ message: 'password is required and must be a string' }),
});
export interface LoginUserDto {
  phone_number: string;
  password: string;
}
