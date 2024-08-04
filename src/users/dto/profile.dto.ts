import { z } from 'zod';

export const paymentAccountSchema = z.object({
  username: z.string({ message: 'username is required and must be a string' }),
  password: z.string({ message: 'password is required and must be a string' }),
  fullname: z.string({ message: 'fullname is required and must be a string' }),
  phone_number: z.string({ message: 'phone_number is required and must be a string' }),
  email: z.string({ message: 'email is required and must be a string' }),
  bio: z.string({ message: 'bio is required and must be a string' }),
  dob: z.string({ message: 'card_holder is required and must be a string' }),
  photo_profile: z.string({ message: 'photo_profile is required and must be a string' }),
});

export interface PaymnentAccountDto {
  name: string;
  number: string;
  card_holder: string;
}
export interface ProfileDto {
  username: string;
  password: string;
  fullname: string;
  phone_number: string;
  email: string;
  bio: string;
  dob: Date;
  photo_profile: string;
}
