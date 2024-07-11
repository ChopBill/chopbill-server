import { Controller, Get, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { Request, Response } from 'express';
import { ErrorCatch } from '../common/filters/error-catch.filter';
import { Authentication } from '../common/guards/authentication.guard';

@Controller('/api/v1/user')
@UseFilters(ErrorCatch)
@UseGuards(Authentication)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    const userId = req.user.id;
    try {
      const user = await this.userService.getProfileService({ id: userId });
      if (user) {
        return res.status(200).json({
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
