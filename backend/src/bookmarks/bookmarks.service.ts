import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { Repository } from 'typeorm';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectRepository(Bookmark)
    private bookmarksRepository: Repository<Bookmark>,
  ) {}

  async create(
    createBookmarkDto: CreateBookmarkDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const bookmark = new Bookmark();
    bookmark.eid = createBookmarkDto.eid;
    bookmark.entity = createBookmarkDto.entity;
    bookmark.name = createBookmarkDto.name;
    bookmark.key = createBookmarkDto.key;
    bookmark.owner = { id: token.userId } as any;
    await this.bookmarksRepository.save(bookmark);
    return bookmark.id;
  }

  async findAll(token: JwtPayloadDto): Promise<Bookmark[]> {
    return await this.bookmarksRepository.find({
      where: { owner: { id: token.userId } as any },
    });
  }

  async findOne(
    entity: string,
    eid: number,
    token: JwtPayloadDto,
  ): Promise<Bookmark> {
    const bookmark = await this.findBookmark(entity, eid, token.userId);
    return bookmark;
  }

  // update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
  //   return `This action updates a #${id} bookmark`;
  // }

  async remove(entity: string, eid: number, token: JwtPayloadDto) {
    const bookmark = await this.findBookmark(entity, eid, token.userId);
    await this.bookmarksRepository.remove(bookmark);
  }

  async findBookmark(
    entity: string,
    eid: number,
    userId: number,
  ): Promise<Bookmark> {
    const bookmark = await this.bookmarksRepository.findOne({
      where: { eid, owner: { id: userId } as any },
    });
    if (!bookmark) {
      throw new NotFoundException();
    }
    return bookmark;
  }
}
