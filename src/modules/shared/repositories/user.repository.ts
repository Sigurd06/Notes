import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/database/postgres';
import { IUserRepository } from 'src/modules/users/interfaces/repositories/repository.interface';
import { Repository } from 'typeorm';
import { IUserCreate } from '../../users/interfaces/usecase/create.interface';

@Injectable()
export class DatabaseUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepostory: Repository<UserEntity>,
  ) {}

  async save(user: IUserCreate): Promise<IUserCreate> {
    console.log(user);
    return await this.userEntityRepostory.save(user);
  }
}
