import { Trim } from 'class-sanitizer';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmailDto {
  @IsNotEmpty()
  @IsEmail()
  @Trim()
  email: string;
}
