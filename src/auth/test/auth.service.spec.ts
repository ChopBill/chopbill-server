import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { PhoneDto } from '../dto/check-phone-number.dto';
import { PrismaService } from '../../db/db.service';
import { ErrorHandler } from '../../common/filters/error-handler';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            users: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should check if a phone number is already registered', async () => {
    const phoneDto: PhoneDto = { phone_number: '1234567890' };
    (prismaService.users.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const result = await authService.checkRegisteredPhoneService(phoneDto);

    expect(result).toBeNull();
  });

  it('should throw an error if the phone number is already registered', async () => {
    const phoneDto: PhoneDto = { phone_number: '1234567890' };
    (prismaService.users.findUnique as jest.Mock).mockResolvedValueOnce({
      id: 1,
      username: 'test',
      password: '',
      fullname: 'Test user',
      phone_number: '1234567890',
      email: 'test@test.com',
      bio: 'test',
      dob: new Date(),
      photo_profile: 'test.com/test',
      created_at: new Date(),
      update_at: new Date(),
    });

    try {
      await authService.checkRegisteredPhoneService(phoneDto);
      fail('Expected checkRegisteredPhoneService to throw an error, but it did not.');
    } catch (error) {
      expect(error).toBeInstanceOf(ErrorHandler);
    }
  });

  it('should register a user by phone', async () => {
    const createUserDto: CreateUserDto = {
      fullname: 'Test User',
      phone_number: '123456789',
      password: 'Password123',
    };

    jest.spyOn(prismaService.users, 'findUnique').mockResolvedValueOnce(null);
    jest.spyOn(prismaService.users, 'create').mockResolvedValueOnce(createUserDto as any);

    const result = await authService.registerUserbyPhoneService(createUserDto);

    expect(result).toEqual(createUserDto);
  });

  it('should login a user by phone', async () => {
    const loginUserDto: LoginUserDto = {
      phone_number: '1234567890',
      password: 'abc123',
    };
    const foundUser = {
      id: 1,
      username: 'test',
      password: '$2b$10$hVdYFaVKG3U/9KViYfMNw.rEg9QaCFYgvAgcpWfNQt5PBpyFNStuu',
      fullname: 'Test User',
      phone_number: '1234567890',
      email: 'test@test.com',
      bio: 'test',
      dob: new Date(),
      photo_profile: 'test.com/test',
      created_at: new Date(),
      update_at: new Date(),
    };

    jest.spyOn(prismaService.users, 'findUnique').mockResolvedValueOnce(foundUser);

    const result = await authService.loginUserService(loginUserDto);

    expect(result).toBeDefined();
  });

  it('should register a user by Google', async () => {
    const fullname = 'Test user';
    const email = 'test@test.com';

    jest.spyOn(prismaService.users, 'create').mockResolvedValueOnce({
      id: 1,
      username: 'test',
      password: '',
      fullname: 'Test user',
      phone_number: '1234567890',
      email: 'test@test.com',
      bio: 'test',
      dob: new Date(),
      photo_profile: 'test.com/test',
      created_at: new Date(),
      update_at: new Date(),
    });
    jest.spyOn(prismaService.users, 'findUnique').mockResolvedValueOnce({
      id: 1,
      username: 'test',
      password: '',
      fullname: 'Test user',
      phone_number: '1234567890',
      email: 'test@test.com',
      bio: 'test',
      dob: new Date(),
      photo_profile: 'test.com/test',
      created_at: new Date(),
      update_at: new Date(),
    });

    const result = await authService.registerUserbyGoogleService(fullname, email);

    expect(result).toEqual(1);
    expect(prismaService.users.create).toHaveBeenCalledWith({
      data: { fullname, email },
    });
    expect(prismaService.users.findUnique).toHaveBeenCalledWith({
      where: { email },
    });
  });
});
