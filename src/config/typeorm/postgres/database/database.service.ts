import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from 'src/config/environment/environment.config.service';
import * as entities from '../../../../common/database/postgres';

export const DatabaseService = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.GET_DATABASE_HOST(),
    port: config.GET_DATABASE_PORT(),
    username: config.GET_DATABASE_USER(),
    password: config.GET_DATABASE_PASSWORD(),
    database: config.GET_DATABASE_NAME(),
    logging: false,
    entities: Object.values(entities),
    synchronize: false,
  } as TypeOrmModuleOptions);
