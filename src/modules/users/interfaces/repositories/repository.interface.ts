import { IUserCreate } from '../usecase/create.interface';

export interface IUserRepository {
  save(user: IUserCreate): Promise<IUserCreate>;
}
