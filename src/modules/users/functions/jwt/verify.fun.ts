import { ConfigService } from '@nestjs/config';
import { JwtPayload, verify } from 'jsonwebtoken';

export function verifyToken(token: string): string | JwtPayload {
  return verify(token, new ConfigService().get<string>('JWT_SECRET'));
}
