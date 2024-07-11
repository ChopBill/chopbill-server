import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['info'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async db(): Promise<void> {
    try {
      await this.onModuleInit();
      console.log('connected to database');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      await this.onModuleDestroy();
    }
  }
}
