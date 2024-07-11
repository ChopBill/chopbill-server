import { z } from 'zod';

export const PhoneSchema = z.object({
  phone_number: z.string({ message: 'phone_number is required and must be a string' }),
});
export interface PhoneDto {
  phone_number: string;
}
