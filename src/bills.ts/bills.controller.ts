import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ErrorCatch } from 'common/filters/error-catch.filter';
import { Authentication } from 'common/guards/authentication.guard';
import { Request, Response } from 'express';
import { BillService } from './bills.service';
import { BillDto, billSchema } from './dto/bill-dto';

@Controller('/api/v1/bill')
@UseFilters(ErrorCatch)
@UseGuards(Authentication)
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post('/')
  async createBill(@Body() billData: BillDto, @Req() req: Request, @Res() res: Response) {
    const userId = req.user.id;
    billSchema.parse(billData);
    try {
      const result = await this.billService.createNewBill(userId, billData);
      return res.status(201).json({
        success: true,
        message: 'New bill added successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Get('/')
  async getBillList(@Req() req: Request, @Res() res: Response) {
    const userId = req.user.id;
    try {
      const result = await this.billService.getAllBill(userId);
      let message = 'Bills retrieved successfully';
      if (result.length === 0) {
        message = 'No bills found for the user';
      }
      return res.status(200).json({
        success: true,
        message: message,
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getOnebill(@Req() req: Request, @Res() res: Response) {
    const id = Number(req.params.id);
    try {
      const result = await this.billService.getBillById(id);
      return res.status(200).json({
        success: true,
        message: 'Bill retrieved successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateBill(@Body() billData: BillDto, @Req() req: Request, @Res() res: Response) {
    const billId = Number(req.params.id);
    billSchema.parse(billData);
    try {
      const result = await this.billService.updateBillByid(billId, billData);
      return res.status(200).json({
        success: true,
        message: 'Bill updated successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteBill(@Req() req: Request, @Res() res: Response) {
    const billId = Number(req.params.id);
    try {
      const result = await this.billService.deleteBillByid(billId);
      return res.status(200).json({
        success: true,
        message: 'Bill deleted successfully',
        data: result,
      });
    } catch (error) {
      throw error;
    }
  }
}
