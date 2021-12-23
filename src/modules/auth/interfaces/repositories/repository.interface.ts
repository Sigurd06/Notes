import { IUserCreate } from '../usecases/create.interface';
import { IUser } from '../usecases/find.interface';

export interface IUserRepository {
  save(user: IUserCreate): Promise<IUserCreate>;
  findByEmail(email: string): Promise<IUser>;
}
