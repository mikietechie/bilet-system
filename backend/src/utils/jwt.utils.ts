import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';

export const tokenAsUserAny = (token: JwtPayloadDto) =>
  Object.assign({ id: token.userId }) as any;
