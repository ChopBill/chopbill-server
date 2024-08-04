import { Module } from '@nestjs/common';
import { PrismaService } from '../db/db.service';
import { Authentication } from '../common/guards/authentication.guard';
import { PaymentController } from './payments.controller';
import { PaymentAccountService } from './payments.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentAccountService, Authentication, PrismaService],
})
export class PaymentAccountModule {}
