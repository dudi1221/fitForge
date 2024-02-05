import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserDto } from 'src/DTO/user.dto';
import { encryptionPassword } from './utils/encryption';

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;
  let userMoke: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));

    userMoke = new User();

    (userMoke.id = '2'),
    (userMoke.username = 'exampleUser'),
    (userMoke.email = 'user@example.com'),
    (userMoke.password = '$2b$10$aYNYmvFbsSCklX9Ywm5huuSmdF1Ve64hIYsqyX98uB12XTh/wJjfG'),
    (userMoke.fitness_goals = 'Stay active'),
    (userMoke.level = 1);

    repo.find = jest.fn().mockResolvedValue([userMoke]);
  });

  it('should return an array of users', async () => {
    const users = await service.findAll();

    expect(users).toEqual([userMoke]);
    expect(Array.isArray(users)).toBe(true);
    expect(users[0]).toBeInstanceOf(User);
  });
});

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;
  let userMock: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));

    userMock = new User();

    (userMock.id = '7'),
    (userMock.username = 'exampleUser5'),
    (userMock.email = 'user5@example.com'),
    (userMock.password = '123456'),
    (userMock.fitness_goals = 'Stay active'),
    (userMock.level = 1);

    repo.save = jest.fn().mockResolvedValue(userMock);
  });

  it('should create a new user', async () => {
    const userDto: UserDto = {
      username: 'newUser',
      email: 'newuser@example.com',
      password: 'securePassword12345',
      fitness_goals: 'Lose weight',
      level: 2,
    };

    const encryptedPassword: "encryptedPassword123" = 'encryptedPassword123';
    const result: User = { ...userMock, password: encryptedPassword };
    jest.spyOn(service, 'encryptionPassword' as keyof UsersService).mockResolvedValue(result);

    const newUser = await service.create(userDto);

    expect(newUser).toEqual(userMock);
    expect(repo.save).toHaveBeenCalledWith({
      ...userDto,
      password: encryptedPassword,
    });
  });
});

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;
  let userMock: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));

    userMock = new User();
    userMock.id = '2';
    userMock.username = 'exampleUser';
    userMock.email = 'user@example.com';
    userMock.password = '$2b$10$aYNYmvFbsSCklX9Ywm5huuSmdF1Ve64hIYsqyX98uB12XTh/wJjfG';
    userMock.fitness_goals = 'Stay active';
    userMock.level = 1;

    repo.findOne = jest.fn().mockResolvedValue(userMock);
    repo.delete = jest.fn().mockResolvedValue({ affected: 1 });
  });

  it('should delete a user', async () => {
    const userIdToDelete = 2;
    const result = await service.delete(userIdToDelete);

    expect(result).toEqual({ affected: 1 });
    // expect(repo.findOne).toHaveBeenCalledWith(userIdToDelete);
    expect(repo.delete).toHaveBeenCalledWith(userIdToDelete);
  });
});
