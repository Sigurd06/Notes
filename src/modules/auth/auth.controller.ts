import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from 'src/modules/shared/usecases-proxy/usecases-proxy';
import { CreateUserDto } from './dto';
import { UserUseCaseModule } from './usecases-proxy/usercase-proxy.module';
import { CreateUserUseCases } from './usescases/create.usecases';
import { LoginUserUseCase } from './usescases/login.usecase';

@ApiTags('AUTH')
@Controller('auth')
export class UserController {
  constructor(
    @Inject(UserUseCaseModule.POST_CREATE_USER)
    private readonly createUserUsecase: UseCaseProxy<CreateUserUseCases>,

    @Inject(UserUseCaseModule.POST_LOGIN_USER)
    private readonly loginUserUsecase: UseCaseProxy<LoginUserUseCase>,
  ) {}

  @Post('/register')
  async create(@Body() user: CreateUserDto) {
    return await this.createUserUsecase.getInstance().execute(user);
  }

  @Post('/login')
  async login(@Body() user: CreateUserDto) {
    return await this.loginUserUsecase.getInstance().execute(user);
  }
}
