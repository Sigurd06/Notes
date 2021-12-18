export interface IUser {
  id?: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUser {
  readonly email: string;
  readonly password: string;
}
