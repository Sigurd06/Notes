import { compareSync } from 'bcryptjs';

export function compareHash(key: string, hash: string): boolean {
  return compareSync(key, hash);
}
