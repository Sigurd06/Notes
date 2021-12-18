import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../..';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  findByName(clientName: string) {
    return this.findOne({ where: { clientName } });
  }
}
