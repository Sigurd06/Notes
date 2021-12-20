import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from '../../../../common/database/postgres/entities';

const entitiesLists = Object.values(entities);

export const DatabaseService = TypeOrmModule.forRootAsync({
  imports: [ConfigModule.forRoot()],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGREST_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DATABASE'),
      logging: false,
      entities: [...entitiesLists],
      synchronize: false,
    };
  },
});
