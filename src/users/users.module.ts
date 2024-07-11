import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from '../db/db.service';
import { Authentication } from '../common/guards/authentication.guard';

@Module({
  controllers: [UserController],
  providers: [UserService, Authentication, PrismaService],
})
export class UsersModule {}
