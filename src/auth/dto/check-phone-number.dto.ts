import { IsNotEmpty, IsString } from 'class-validator';
import { Trim } from 'class-sanitizer';
export class PhoneDto {
  @IsNotEmpty()
  @IsString()
  @Trim()
  phone_number: string;
}
