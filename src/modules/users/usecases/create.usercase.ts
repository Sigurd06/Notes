import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/common/database/postgres';
import { ILogger } from 'src/common/logger/interfaces/logger.interface';
import { LoggerService } from 'src/common/logger/logger.service';

@Injectable()
export class UserCreateUseCase {
  private readonly logger: ILogger = new LoggerService();
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<void> {
    console.log('usecase');
    const all = await this.userRepository.find();
    this.logger.log('usecase', 'SAVE');
    console.log(all);
  }
}
