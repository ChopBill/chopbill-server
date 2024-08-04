import { Injectable } from '@nestjs/common';
import { ErrorHandler } from '../common/filters/error-handler';
import { PrismaService } from '../db/db.service';
import { PaymnentAccountDto } from './dto/account-dto';
import { ActivatedDto } from './dto/set-activated-dto';

@Injectable()
export class PaymentAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async CreatePaymentAccount(userId: number, createAccount: PaymnentAccountDto) {
    const { name, number, card_holder } = createAccount;
    try {
      const checkAccountList = await this.prisma.payment_account.findMany({
        where: {
          user_id: userId,
        },
      });

      const activated = checkAccountList.length === 0;
      const newAccount = await this.prisma.payment_account.create({
        data: {
          user_id: userId,
          name: name,
          number: number,
          card_holder: card_holder,
          is_activated: activated,
        },
      });
      return newAccount;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async getAccountList(userId: number) {
    try {
      const accountList = await this.prisma.payment_account.findMany({
        where: {
          user_id: userId,
        },
      });
      return accountList;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async setActivated(userId: number, accountId: ActivatedDto) {
    const { account_id } = accountId;
    try {
      const existingActivatedAccount = await this.prisma.payment_account.findMany({
        where: {
          user_id: userId,
          is_activated: true,
        },
      });
      await this.prisma.payment_account.update({
        where: { id: existingActivatedAccount[0].id },
        data: { is_activated: false },
      });

      const activateAccount = await this.prisma.payment_account.update({
        where: { id: account_id },
        data: { is_activated: true },
      });

      return activateAccount;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async updateAccount(id: number, accountData: PaymnentAccountDto) {
    const { name, number, card_holder } = accountData;
    try {
      const editAccount = await this.prisma.payment_account.update({
        where: { id: id },
        data: {
          name: name,
          number: number,
          card_holder: card_holder,
        },
      });

      return editAccount;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }
  async deleteAccount(id: number) {
    try {
      const getAccount = await this.prisma.payment_account.findUnique({
        where: { id: id },
      });

      if (getAccount.is_activated === true) {
        throw new ErrorHandler({
          success: false,
          status: 400,
          message:
            'Cannot delete an active account. Please set another account as active before deleting this one.',
        });
      }

      const delAccount = await this.prisma.payment_account.delete({
        where: { id: id },
      });

      return delAccount;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }
}
