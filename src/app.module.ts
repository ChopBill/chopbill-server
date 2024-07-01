import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelmetMiddleware } from './common/middlewares/helmet.middleware';
import { GoogleSessionMiddleware } from './common/middlewares/google-session.middleware';
import { CorsMiddleware } from './common/middlewares/cors-option.middleware';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware, HelmetMiddleware, GoogleSessionMiddleware).forRoutes('*');
  }
}
