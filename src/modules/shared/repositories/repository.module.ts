import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/database/postgres';
import { DatabaseModule } from 'src/config/typeorm/postgres/database';
import { DatabaseUserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [DatabaseUserRepository],
  exports: [DatabaseUserRepository],
})
export class RepositoriesModule {}
