import { Module } from '@nestjs/common';
import { PrismaService } from '../db/db.service';
import { Authentication } from '../common/guards/authentication.guard';
import { BillController } from './bills.controller';
import { BillService } from './bills.service';

@Module({
  controllers: [BillController],
  providers: [BillService, Authentication, PrismaService],
})
export class BillModule {}
