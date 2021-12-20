import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEnvironment } from './interfaces/environment.interface';

@Injectable()
export class EnvironmentConfigService implements IEnvironment {
  constructor(private readonly configService: ConfigService) {}

  GET_DATABASE_HOST(): string {
    return this.configService.get<string>('POSTGRES_HOST');
  }
  GET_DATABASE_PORT(): number {
    return this.configService.get<number>('POSTGRES_PORT');
  }
  GET_DATABASE_USER(): string {
    return this.configService.get<string>('POSTGREST_USER');
  }
  GET_DATABASE_PASSWORD(): string {
    return this.configService.get<string>('POSTGRES_PASSWORD');
  }
  GET_DATABASE_NAME(): string {
    return this.configService.get<string>('POSTGRES_DATABASE');
  }
}
