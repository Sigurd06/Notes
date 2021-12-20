import { Module } from '@nestjs/common';
import { UserUseCaseModule } from './usecases-proxy/usercase-proxy.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserUseCaseModule.register()],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
