import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('bookmarks')
@Controller('api/v1/bookmarks')
@UseGuards(JwtAuthGuard)
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(@Body() createBookmarkDto: CreateBookmarkDto, @Request() req) {
    return this.bookmarksService.create(createBookmarkDto, req.user);
  }

  @Get()
  findAll(@Request() req) {
    return this.bookmarksService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.bookmarksService.findOne(id, req.user);
  }

  // @Patch(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateBookmarkDto: UpdateBookmarkDto,
  //   @Request() req,
  // ) {
  //   return this.bookmarksService.update(id, updateBookmarkDto, req.user);
  // }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.bookmarksService.remove(id, req.user);
  }
}
