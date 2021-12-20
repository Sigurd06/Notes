import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from 'src/config/environment/environment.config.module';
import { EnvironmentConfigService } from 'src/config/environment/environment.config.service';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: DatabaseService,
    }),
  ],
})
export class DatabaseModule {}
