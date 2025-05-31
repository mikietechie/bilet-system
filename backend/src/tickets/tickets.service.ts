import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { ListsService } from 'src/lists/lists.service';
import { JwtPayloadDto } from 'src/auth/dto/jwt-payload-dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    private listsService: ListsService,
  ) {}
  async create(
    createTicketDto: CreateTicketDto,
    token: JwtPayloadDto,
  ): Promise<number> {
    const list = await this.listsService.getListWithOwner(
      createTicketDto.listid,
    );
    this.listsService.checkAlterPermissions(list, token);
    const ticket = new Ticket();
    ticket.name = createTicketDto.name;
    ticket.questions = createTicketDto.questions as any;
    ticket.list = list;
    await this.ticketsRepository.save(ticket);
    return ticket.id;
  }

  findAll() {
    return `This action returns all tickets`;
  }

  async findOne(id: number): Promise<Ticket> {
    try {
      return await this.ticketsRepository.findOneOrFail({
        where: { id },
        relations: { questions: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }

  async update(
    id: number,
    updateTicketDto: UpdateTicketDto,
    token: JwtPayloadDto,
  ): Promise<Ticket> {
    const ticket = await this.getTicketWithList(id);
    const list = await this.listsService.getListWithOwner(ticket.list.id);
    this.listsService.checkAlterPermissions(list, token);
    ticket.name = updateTicketDto.name;
    ticket.questions = updateTicketDto.questions as any;
    await this.ticketsRepository.save(ticket);
    return ticket;
  }

  async remove(id: number, token: JwtPayloadDto) {
    const ticket = await this.getTicketWithList(id);
    const list = await this.listsService.getListWithOwner(ticket.list.id);
    this.listsService.checkAlterPermissions(list, token);
    await this.ticketsRepository.remove(ticket);
  }

  async getTicketWithList(id: number): Promise<Ticket> {
    try {
      return await this.ticketsRepository.findOneOrFail({
        where: { id },
        relations: { list: true },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException();
    }
  }
}
