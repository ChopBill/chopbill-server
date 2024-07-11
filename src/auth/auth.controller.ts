import { Controller, Post, Body, UseFilters, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PhoneDto } from './dto/check-phone-number.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { ErrorCatch } from '../common/filters/error-catch.filter';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwt: JwtService,
  ) {}

  @Post('/register')
  @UseFilters(ErrorCatch)
  async registerByPhone(@Body() createUser: CreateUserDto, @Res() res: Response) {
    try {
      CreateUserSchema.parse(createUser);
      const result = await this.authService.registerUserbyPhoneService(createUser);
      return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: result,
      });
    } catch (error: any) {
      throw error;
    }
  }

  @Post('/check-number')
  @UseFilters(ErrorCatch)
  async checkPhoneNumber(@Body() phone: PhoneDto, @Res() res: Response) {
    try {
      await this.authService.checkRegisteredPhoneService(phone);
      return res.status(200).json({
        success: true,
        message: 'Phone Number is available to register',
      });
    } catch (error: any) {
      throw error;
    }
  }

  @Post('/login')
  @UseFilters(ErrorCatch)
  async loginByPhoneNumber(@Body() userData: LoginUserDto, @Res() res: Response) {
    try {
      const result = await this.authService.loginUserService(userData);
      const payload = { id: result.user.id };
      const token = this.jwt.sign(payload);
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully.',
        token: token,
      });
    } catch (error: any) {
      throw error;
    }
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    try {
      const userId = req.user.id;
      if (!userId) {
        return res.redirect(`${process.env.FE_URL}/google-auth/failed`);
      }
      const payload = {
        id: userId,
      };
      const token = this.jwt.sign(payload);
      return res.redirect(`${process.env.FE_URL}/google-auth/success?token=${token}`);
    } catch (error) {
      console.error(error);
      return res.redirect(`${process.env.FE_URL}/google-auth/failed`);
    }
  }
}
