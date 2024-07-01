import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { PhoneDto } from './dto/check-phone-number.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ErrorHandler } from '../common/filters/error-handler';
import { PrismaService } from '../db/db.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async checkRegisteredPhoneService(phone: PhoneDto) {
    try {
      const userPhone = await this.prisma.users.findUnique({
        where: { phone_number: phone.phone_number },
      });
      if (userPhone) {
        throw new ErrorHandler({
          success: false,
          message: 'Phone Number already registered, please use other Phone Number',
          status: 409,
        });
      }
      return userPhone;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async registerUserbyPhoneService(createUserDto: CreateUserDto) {
    const { fullname, phone_number, password } = createUserDto;
    try {
      const userPhone = await this.prisma.users.findUnique({
        where: { phone_number: phone_number },
      });
      if (userPhone) {
        throw new ErrorHandler({
          success: false,
          message: 'Phone Number already registered, please use other Phone Number',
          status: 409,
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const createUser = await this.prisma.users.create({
        data: {
          fullname: fullname,
          phone_number: phone_number,
          password: hashedPassword,
        },
      });

      return createUser;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async loginUserService(userData: LoginUserDto) {
    const { phone_number, password } = userData;
    try {
      const user = await this.prisma.users.findUnique({
        where: { phone_number: phone_number },
      });
      if (!user) {
        throw new ErrorHandler({
          success: false,
          message: 'Phone Number or Password invalid',
          status: 401,
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new ErrorHandler({
          success: false,
          message: 'Phone Number or Password invalid',
          status: 401,
        });
      }
      return { user };
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async registerUserbyGoogleService(fullname: string, email: string) {
    try {
      await this.prisma.users.create({
        data: { fullname: fullname, email: email },
      });
      const user = await this.prisma.users.findUnique({
        where: { email: email },
      });
      return user.id || null;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async getEmail(email: string) {
    try {
      return await this.prisma.users.findUnique({ where: { email } });
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: 500,
        message: error.message,
      });
    }
  }
}
