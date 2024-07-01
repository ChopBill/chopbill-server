import { Trim } from 'class-sanitizer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @Trim()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
