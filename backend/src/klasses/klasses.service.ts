import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Klass } from './entities/klass.entity';
import { Raw, Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';
import { UsersService } from 'src/users/users.service';
import { UserRole } from 'src/users/entities/user.entity';
import { AddKlassMemberDto } from './dto/add-klass-member.dto';
import { KlassMember } from './entities/klass-member.entity';
import { UpdateKlassMemberDto } from './dto/update-klass-member.dto';

@Injectable()
export class KlassesService {
  constructor(
    @InjectRepository(Klass)
    private klassesRepository: Repository<Klass>,
    @InjectRepository(KlassMember)
    private klassMembersRepository: Repository<KlassMember>,
    private usersService: UsersService,
  ) {}

  async create(
    createKlassDto: CreateKlassDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const klass = new Klass();
    klass.name = createKlassDto.name;
    klass.isPublic = createKlassDto.isPublic;
    klass.owner = await this.usersService.getUserFk(token.userId);
    await this.klassesRepository.save(klass);
    return klass.id;
  }

  async findAll(): Promise<Klass[]> {
    return this.klassesRepository.find();
  }

  async findOne(id: number): Promise<Klass> {
    return await this.klassesRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    updateKlassDto: UpdateKlassDto,
    token: JwtPayloadDto,
  ): Promise<Klass> {
    const klass = await this.findOneWithOwner(id);
    this.canAlterKlass(klass, token);
    klass.name = updateKlassDto.name;
    klass.isPublic = updateKlassDto.isPublic;
    await this.klassesRepository.save(klass);
    return klass;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const klass = await this.findOneWithOwner(id);
    this.canAlterKlass(klass, token);
    await this.klassesRepository.delete(klass);
  }

  async findAllMembers(id: number): Promise<KlassMember[]> {
    const klass = await this.klassesRepository.findOneBy({ id });
    return await this.klassesRepository.query(
      `
SELECT
    klass_member."id" as "id",
    klass_member."userId" as "userId",
    klass_member."klassId" as "klassId",
    klass_member."isActive" as "isActive",
    klass_member."isAdmin" as "isAdmin",
    users."name" as "userName",
    users."email" as "userEmail"
FROM
    klass_member
    JOIN users ON users."id" = klass_member."userId"
WHERE
    klass_member."klassId" = $1;`,
      [klass.id],
    );
  }

  async addMember(
    klassId: number,
    addKlassMemberDto: AddKlassMemberDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const klassMember = new KlassMember();
    klassMember.user = await this.usersService.getUserFk(
      addKlassMemberDto.userId,
    );
    klassMember.klass = await this.findOneWithOwner(klassId);
    klassMember.isAdmin = addKlassMemberDto.isAdmin;
    // klassMember.isActive = addKlassMemberDto.isActive;

    if (!(klassMember.klass.owner.id === token.userId)) {
      klassMember.isAdmin = false;
    }

    const creator = await this.usersService.getUserFk(token.userId);
    const isAdmin = Boolean(
      creator ||
        (await this.klassMembersRepository.findOneBy({
          isAdmin: true,
          user: await this.usersService.getUserFk(token.userId),
        })),
    );
    if (!isAdmin && klassMember.klass.membersNeedActivation) {
      klassMember.isActive = false;
    }

    // Check permissions
    if (
      (!klassMember.klass.isPublic && !isAdmin) ||
      (!isAdmin && klassMember.user.id !== token.userId)
    ) {
      throw new UnauthorizedException();
    }
    // TODO: maybe add more conditions
    const existing = await this.klassMembersRepository.findOneBy({
      // klass: klassMember.klass,
      // user: klassMember.user,
      id: Raw(
        () =>
          `"klassId" = ${klassMember.klass.id} AND "userId" = ${klassMember.user.id}`,
      ),
    });
    if (existing) {
      throw new BadRequestException('User already in klass');
    }
    await this.klassMembersRepository.save(klassMember);
    return klassMember.id;
  }

  async removeMember(id: number, token: JwtPayloadDto) {
    const klassMember = await this.klassMembersRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        klass: true,
        user: true,
      },
    });
    const klass = await this.findOneWithOwner(klassMember.klass.id);
    const admin = await this.klassMembersRepository.findOneBy({
      isAdmin: true,
      user: await this.usersService.getUserFk(token.userId),
      klass: klass,
    });
    if (
      klassMember.user.id === token.userId ||
      klass.owner.id === token.userId ||
      admin
    ) {
      await this.klassMembersRepository.remove(klassMember);
      return;
    }
    throw new UnauthorizedException();
  }

  async updateMember(
    id: number,
    updateKlassMemberDto: UpdateKlassMemberDto,
    token: JwtPayloadDto,
  ) {
    const klassMember = await this.klassMembersRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        klass: true,
        user: true,
      },
    });
    const klass = await this.findOneWithOwner(klassMember.klass.id);
    const admin = await this.klassMembersRepository.findOneBy({
      isAdmin: true,
      user: await this.usersService.getUserFk(token.userId),
      klass: klass,
    });
    if (klass.owner.id === token.userId || admin) {
      klassMember.isActive = updateKlassMemberDto.isActive;
      klassMember.isAdmin = updateKlassMemberDto.isAdmin;
      await this.klassMembersRepository.save(klassMember);
      return;
    }
    throw new UnauthorizedException();
  }

  async findOneWithOwner(id: number): Promise<Klass> {
    return await this.klassesRepository.findOneOrFail({
      where: {
        id,
      },
      relations: {
        owner: true,
      },
    });
  }

  canAlterKlass(klass: Klass, token: JwtPayloadDto) {
    if (!(token.role === UserRole.ADMIN || klass.owner.id === token.userId)) {
      throw new UnauthorizedException();
    }
  }
}
