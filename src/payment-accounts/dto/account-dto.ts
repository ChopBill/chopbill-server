import { z } from 'zod';

export const paymentAccountSchema = z.object({
  name: z.string({ message: 'name is required and must be a string' }),
  number: z.string({ message: 'number is required and must be a string' }),
  card_holder: z.string({ message: 'card_holder is required and must be a string' }),
});

export interface PaymnentAccountDto {
  name: string;
  number: string;
  card_holder: string;
}
