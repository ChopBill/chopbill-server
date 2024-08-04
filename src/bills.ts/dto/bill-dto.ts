import { z } from 'zod';

export const billSchema = z.object({
  payment_account_id: z.number({
    message: 'payment_account_id is required and must be an integer',
  }),
  description: z.string({ message: 'description is required and must be a string' }),
  tax: z.number({ message: 'tax is required and must be an integer' }),
  service: z.number({ message: 'service is required and must be an integer' }),
  discount: z.number({ message: 'discount is required and must be an integer' }),
  friends: z.array(
    z.object({
      name: z.string({ message: 'name is required and must be a string' }),
      orders: z.array(
        z.object({
          item: z.string({ message: 'item is required and must be a string' }),
          price: z.number({ message: 'price is required and must be a number' }),
        }),
      ),
    }),
  ),
});

export interface BillDto {
  payment_account_id: number;
  description: string;
  tax: number;
  service: number;
  discount: number;
  friends: {
    name: string;
    orders: {
      item: string;
      quantity: number;
      price: number;
    }[];
  }[];
}
