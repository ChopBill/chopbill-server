import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { Authentication } from './guards/authentication.guard';
import { UserController } from './users.controller';
import { PrismaService } from '../db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController],
  providers: [UserService, Authentication, PrismaService],
})
export class UsersModule {}
