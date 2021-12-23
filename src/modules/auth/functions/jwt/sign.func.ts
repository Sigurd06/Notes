import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';
import { IPayload } from '../../interfaces/usecases/payload.interface';

export function singJwt(payload: IPayload) {
  return sign(payload, new ConfigService().get<string>('JWT_SECRET'), {
    expiresIn: '1h',
  });
}
