export interface IEnvironment {
  GET_DATABASE_HOST(): string;
  GET_DATABASE_PORT(): number;
  GET_DATABASE_USER(): string;
  GET_DATABASE_PASSWORD(): string;
  GET_DATABASE_NAME(): string;
}
