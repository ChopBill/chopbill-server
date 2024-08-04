import { Injectable } from '@nestjs/common';
import { ErrorHandler } from '../common/filters/error-handler';
import { PrismaService } from '../db/db.service';
import { BillDto } from './dto/bill-dto';

@Injectable()
export class BillService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewBill(userId: number, billData: BillDto) {
    const { payment_account_id, description, tax, service, discount, friends } = billData;
    try {
      const newBill = await this.prisma.bill.create({
        data: {
          user_id: userId,
          payment_account_id: payment_account_id,
          description: description,
          tax: tax,
          service: service,
          discount: discount,
        },
      });
      const operations = [];
      let totalPrice = 0;

      for (const friend of friends) {
        const insertedFriend = await this.prisma.friend_order.create({
          data: {
            bill_id: newBill.id,
            name: friend.name,
          },
        });

        for (const order of friend.orders) {
          const itemTotal = order.price * (order.quantity || 1);
          totalPrice += itemTotal;

          operations.push(
            this.prisma.order_detail.create({
              data: {
                friend_order_id: insertedFriend.id,
                menu: order.item,
                quantity: order.quantity,
                price: order.price,
              },
            }),
          );
        }
      }

      await this.prisma.$transaction(operations);

      const taxAmount = (tax / 100) * totalPrice;
      const serviceAmount = (service / 100) * totalPrice;
      const discountAmount = (discount / 100) * totalPrice;
      const finalTotalPrice = totalPrice + taxAmount + serviceAmount - discountAmount;

      const billWithTotalPrice = await this.prisma.bill.update({
        where: { id: newBill.id },
        data: {
          total_price: finalTotalPrice,
        },
      });

      return billWithTotalPrice;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async getAllBill(userId: number) {
    try {
      const bills = await this.prisma.bill.findMany({
        where: { user_id: userId },
      });
      return bills;
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async getBillById(id: number) {
    try {
      const bill = await this.prisma.bill.findUnique({
        where: { id: id },
      });
      if (!bill) {
        throw new ErrorHandler({
          success: false,
          status: 404,
          message: 'Bill not found',
        });
      }
      const friend_orders = await this.prisma.friend_order.findMany({
        where: { bill_id: bill.id },
        include: { order_detail: true },
      });
      return { bill, friend_orders };
    } catch (error: any) {
      console.error(error);
      throw new ErrorHandler({
        success: false,
        status: error.status || 500,
        message: error.message || 'An error occurred',
      });
    }
  }

  async updateBillByid(id: number, billData: BillDto) {
    const { payment_account_id, description, tax, service, discount, friends } = billData;
    try {
      const updatedBill = await this.prisma.bill.update({
        where: { id: id },
        data: {
          payment_account_id: payment_account_id,
          description: description,
          tax: tax,
          service: service,
          discount: discount,
        },
      });

      await this.prisma.friend_order.deleteMany({ where: { bill_id: id } });
      const operations = [];
      let totalPrice = 0;

      for (const friend of friends) {
        const insertedFriend = await this.prisma.friend_order.create({
          data: {
            bill_id: updatedBill.id,
            name: friend.name,
          },
        });

        for (const order of friend.orders) {
          const itemTotal = order.price * (order.quantity || 1);
          totalPrice += itemTotal;

          operations.push(
            this.prisma.order_detail.create({
              data: {
                friend_order_id: insertedFriend.id,
                menu: order.item,
                quantity: order.quantity,
                price: order.price,
              },
            }),
          );
        }
      }

      await this.prisma.$transaction(operations);

      const taxAmount = (tax / 100) * totalPrice;
      const serviceAmount = (service / 100) * totalPrice;
      const discountAmount = (discount / 100) * totalPrice;
      const finalTotalPrice = totalPrice + taxAmount + serviceAmount - discountAmount;

      const billWithTotalPrice = await this.prisma.bill.update({
        where: { id: updatedBill.id },
        data: {
          total_price: finalTotalPrice,
        },
      });

      return billWithTotalPrice;
    } catch (error: any) {
      console.error(error);
      if (error.message.includes('not found.')) {
        throw new ErrorHandler({
          success: false,
          status: 404,
          message: 'Bill not found',
        });
      } else {
        throw new ErrorHandler({
          success: false,
          status: error.status || 500,
          message: error.message || 'An error occurred while updating the bill',
        });
      }
    }
  }

  async deleteBillByid(id: number) {
    try {
      const deleteBill = await this.prisma.bill.delete({
        where: { id: id },
      });
      await this.prisma.friend_order.deleteMany({ where: { bill_id: id } });

      return deleteBill;
    } catch (error: any) {
      console.error(error);
      if (error.message.includes('not found.')) {
        throw new ErrorHandler({
          success: false,
          status: 404,
          message: 'Bill not found',
        });
      } else {
        throw new ErrorHandler({
          success: false,
          status: error.status || 500,
          message: error.message || 'An error occurred while updating the bill',
        });
      }
    }
  }
}
