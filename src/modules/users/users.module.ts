import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ExceptionsModule } from 'src/common/exceptions/exceptions.module';
import { UserCreateUseCase } from './usecases';
import { LoggerService } from 'src/common/logger/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/common/database/postgres';

@Module({
  imports: [ExceptionsModule, TypeOrmModule.forFeature([UserRepository])],
  controllers: [UsersController],
  providers: [LoggerService, UserCreateUseCase],
})
export class UsersModule {}
