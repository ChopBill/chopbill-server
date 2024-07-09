import { Controller, Get, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { Authentication } from './guards/authentication.guard';
import { Request, Response } from 'express';
import { ErrorCatch } from 'common/filters/error-catch.filter';

@Controller('/api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwt: JwtService,
  ) {}

  @Get('/')
  @UseGuards(Authentication)
  @UseFilters(ErrorCatch)
  async getProfile(@Req() req: Request, @Res() res: Response) {
    const userId = req.user.id;
    try {
      const user = await this.userService.getProfileService({ id: userId });
      if (user) {
        return res.json({
          success: true,
          message: 'User profile retrieved successfully',
          data: user,
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
