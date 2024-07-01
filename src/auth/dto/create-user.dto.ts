import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Trim()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @Trim()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message: 'Password must contain at least one letter, one number, and one special character.',
  })
  password: string;
}
