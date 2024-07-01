import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "welcome word"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toStrictEqual({
        message: 'Welcome to DutchPay API',
        success: true,
        version: '1.1.0',
      });
    });
  });
});
