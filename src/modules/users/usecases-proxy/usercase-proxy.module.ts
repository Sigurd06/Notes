import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionsModule } from 'src/common/exceptions/exceptions.module';
import { LoggerModule } from 'src/common/logger/logger.module';
import { LoggerService } from 'src/common/logger/logger.service';
import { UseCaseProxy } from 'src/modules/shared/usecases-proxy/usecases-proxy';
import { CreateUserUseCases } from '../usescases/create.usecases';
import { RepositoriesModule } from '../../shared/repositories/repository.module';
import { DatabaseUserRepository } from '../../shared/repositories/user.repository';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UserUseCaseModule {
  static POST_CREATE_USER = 'POST_CREATE_USER';

  static register(): DynamicModule {
    return {
      module: UserUseCaseModule,
      providers: [
        {
          inject: [LoggerService, DatabaseUserRepository],
          provide: UserUseCaseModule.POST_CREATE_USER,
          useFactory: (
            logger: LoggerService,
            userRepository: DatabaseUserRepository,
          ) => new UseCaseProxy(new CreateUserUseCases(logger, userRepository)),
        },
      ],
      exports: [UserUseCaseModule.POST_CREATE_USER],
    };
  }
}
