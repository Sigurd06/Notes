import { IException } from 'src/common/exceptions/interfaces/exceptions.interface';
import { ILogger } from 'src/common/logger/interfaces/logger.interface';
import { IUserRepository } from '../interfaces/repositories/repository.interface';
import { IUserCreate } from '../interfaces/usecases/create.interface';
import { IToken } from '../interfaces/usecases/token.interfaces';
import { compareHash } from '../functions/bcryptjs/compare.func';
import { singJwt } from '../functions/jwt/sign.func';
import { ConfigService } from '@nestjs/config';

export class LoginUserUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly exceptions: IException,
    private readonly userRepository: IUserRepository,
  ) {}
  async execute(user: IUserCreate): Promise<IToken> {
    this.logger.log('USECASE (LOGIN USER)', 'execute');
    const userFound = await this.userRepository.findByEmail(user.email);

    if (userFound && compareHash(user.password, userFound.password)) {
      const token = singJwt({ id: userFound.id });
      return { token };
    } else {
      this.exceptions.badRequestException({
        message: 'Invalid credentials',
      });
    }
  }
}
