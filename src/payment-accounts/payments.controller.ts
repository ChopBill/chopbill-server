import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ErrorCatch } from 'common/filters/error-catch.filter';
import { Authentication } from 'common/guards/authentication.guard';
import { PaymentAccountService } from './payments.service';
import { Request, Response } from 'express';
import { paymentAccountSchema, PaymnentAccountDto } from './dto/account-dto';
import { ActivatedDto, setActivatedSchema } from './dto/set-activated-dto';

@Controller('/api/v1/payment-account')
@UseFilters(ErrorCatch)
@UseGuards(Authentication)
export class PaymentController {
  constructor(private readonly paymentService: PaymentAccountService) {}

  @Post('/')
  async createPaymentAccount(
    @Body() accountData: PaymnentAccountDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req.user.id;
    paymentAccountSchema.parse(accountData);
    try {
      const result = await this.paymentService.CreatePaymentAccount(userId, accountData);
      return res.status(201).json({
        success: true,
        message: 'New payment account added successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Get('/')
  async getPaymentAccountList(@Req() req: Request, @Res() res: Response) {
    const userId = req.user.id;
    try {
      const result = await this.paymentService.getAccountList(userId);
      return res.status(200).json({
        success: true,
        message: 'Payment account list retrieved successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Patch('/')
  async setActivateAccount(
    @Body() account_id: ActivatedDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = req.user.id;
    setActivatedSchema.parse(account_id);
    try {
      const result = await this.paymentService.setActivated(userId, account_id);
      return res.status(200).json({
        success: true,
        message: 'Payment account activated successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updatePatmentAccount(
    @Body() accountData: PaymnentAccountDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const accountId = Number(req.params.id);
    paymentAccountSchema.parse(accountData);
    try {
      const result = await this.paymentService.updateAccount(accountId, accountData);
      return res.status(200).json({
        success: true,
        message: 'Payment account updated successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deletePaymentAccount(@Req() req: Request, @Res() res: Response) {
    const accountId = Number(req.params.id);
    try {
      const result = await this.paymentService.deleteAccount(accountId);
      return res.status(200).json({
        success: true,
        message: 'Payment account deleted successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }
}
