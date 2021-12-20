import { IUserCreate } from '../user/create.interface';

export interface IUserRepository {
  save(user: IUserCreate): Promise<IUserCreate>;
}
