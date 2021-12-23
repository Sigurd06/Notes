import { IUserCreate } from '../usecases/create.interface';
import { IUser } from '../usecases/find.interface';

export interface IUserRepository {
  save(user: IUserCreate): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
}
