import { UnauthorizedException } from '@nestjs/common';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UserRole } from 'src/users/entities/user.entity';

interface IOwnedItem {
  owner: {
    id: number;
  };
}

export const checkOwnerShipPermissions = (
  item: IOwnedItem,
  token: JwtPayloadDto,
) => {
  if (!(token.role === UserRole.ADMIN) || token.userId !== item.owner.id) {
    throw new UnauthorizedException();
  }
};
