import { z } from 'zod';

export const setActivatedSchema = z.object({
  account_id: z.number({ message: 'id is required and must be a integer' }),
});

export interface ActivatedDto {
  account_id: number;
}
