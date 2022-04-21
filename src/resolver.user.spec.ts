import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import { UserResolver } from './resolvers.user';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

describe('UserResolver', () => {
  let resolver: UserResolver;
  const prismaMock = createMock<PrismaService>();
  prismaMock.user.findMany.mockResolvedValue({ id: 1 } as User); // <---- TS validation error - Property 'mockResolvedValue' does not exist on type

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
