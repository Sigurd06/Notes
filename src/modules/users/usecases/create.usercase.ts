import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/config/typeorm/postgres/database';

@Injectable()
export class UserCreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<void> {
    console.log('usecase');
    const all = await this.userRepository.find();
    console.log(all);
  }
}
