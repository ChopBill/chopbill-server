import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user: {
      id: number;
    };
  }
}

@Injectable()
export class Authentication implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException({
        success: false,
        message: 'Unauthorized, Please login',
      });
    }

    try {
      const decoded = this.jwtService.verify(token, { secret: process.env.SECRET_KEY });
      req.user = decoded;
      return true;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      throw new UnauthorizedException({
        success: false,
        message: 'Invalid token',
      });
    }
  }
}
