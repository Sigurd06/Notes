import { ILogger } from 'src/common/logger/interfaces/logger.interface';
import { IUserRepository } from '../interfaces/repositories/repository.interface';
import { IUserCreate } from '../interfaces/usecase/create.interface';

export class CreateUserUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(user: IUserCreate): Promise<IUserCreate> {
    this.logger.log('USECASE (CREATE USER) execute', 'INIT USECASE');
    console.log(user);
    return await this.userRepository.save(user);
  }
}
