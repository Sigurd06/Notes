import { hashSync } from 'bcryptjs';

export function encrypted(key: string): string {
  return hashSync(key, 10);
}
