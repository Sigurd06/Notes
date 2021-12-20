import { ILogger } from 'src/common/logger/interfaces/logger.interface';
import { IUserRepository } from '../interfaces/repositories/repository.interface';
import { IUserCreate } from '../interfaces/usecases/create.interface';
import { encrypted } from '../functions/bcryptjs/hash.func';
import { IException } from 'src/common/exceptions/interfaces/exceptions.interface';

export class CreateUserUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly exceptions: IException,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(user: IUserCreate): Promise<IUserCreate> {
    this.logger.log('USECASE (CREATE USER)', 'execute');
    const userExists = await this.userRepository.findByEmail(user.email);
    if (userExists) {
      this.exceptions.badRequestException({
        message: 'User already exists.',
        code: 400,
      });
    }

    return await this.userRepository.save({
      email: user.email,
      password: encrypted(user.password),
    });
  }
}
