import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filter/exception.filter';
import { LoggingInterceptor } from './common/interceptors/logger.interceptor';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { LoggerService } from './common/logger/logger.service';
import { SwaggerConfig } from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api/v1');

  SwaggerConfig.ConfigSwaggerModule(app);

  await app.listen(3000);
}
bootstrap();
