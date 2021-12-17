import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ExceptionsModule } from 'src/common/exceptions/exceptions.module';

@Module({
  imports: [ExceptionsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
