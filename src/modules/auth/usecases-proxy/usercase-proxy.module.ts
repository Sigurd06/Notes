import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/common/exceptions/exceptions.module';
import { LoggerModule } from 'src/common/logger/logger.module';
import { LoggerService } from 'src/common/logger/logger.service';
import { UseCaseProxy } from 'src/modules/shared/usecases-proxy/usecases-proxy';
import { CreateUserUseCases } from '../usescases/create.usecases';
import { RepositoriesModule } from '../../shared/repositories/repository.module';
import { DatabaseUserRepository } from '../../shared/repositories/user.repository';
import { ExceptionsService } from 'src/common/exceptions/exceptions.service';
import { LoginUserUseCase } from '../usescases/login.usecase';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UserUseCaseModule {
  static POST_CREATE_USER = 'POST_CREATE_USER';
  static POST_LOGIN_USER = 'POST_LOGIN_USER';

  static register(): DynamicModule {
    return {
      module: UserUseCaseModule,
      providers: [
        {
          inject: [LoggerService, ExceptionsService, DatabaseUserRepository],
          provide: UserUseCaseModule.POST_CREATE_USER,
          useFactory: (
            logger: LoggerService,
            exceptions: ExceptionsService,
            userRepository: DatabaseUserRepository,
          ) =>
            new UseCaseProxy(
              new CreateUserUseCases(logger, exceptions, userRepository),
            ),
        },
        {
          inject: [LoggerService, ExceptionsService, DatabaseUserRepository],
          provide: UserUseCaseModule.POST_LOGIN_USER,
          useFactory: (
            logger: LoggerService,
            exceptions: ExceptionsService,
            userRepository: DatabaseUserRepository,
          ) =>
            new UseCaseProxy(
              new LoginUserUseCase(logger, exceptions, userRepository),
            ),
        },
      ],
      exports: [
        UserUseCaseModule.POST_CREATE_USER,
        UserUseCaseModule.POST_LOGIN_USER,
      ],
    };
  }
}
