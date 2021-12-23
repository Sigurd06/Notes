import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UseCaseProxy } from 'src/modules/shared/usecases-proxy/usecases-proxy';
import { CreateUserDto } from './dto';
import { UserUseCaseModule } from './usecases-proxy/usercase-proxy.module';
import { CreateUserUseCases } from './usescases/create.usecases';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserUseCaseModule.POST_CREATE_USER)
    private readonly createUserUsecase: UseCaseProxy<CreateUserUseCases>,
  ) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.createUserUsecase.getInstance().execute(user);
  }
}
