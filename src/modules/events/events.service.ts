import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { Event as EventInterface} from './interfaces/event.interface';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
  }

  async create(event: EventInterface) {
    return await this.eventRepository.create(event);
  }

  async createAndSave(event: EventInterface) {
    const eventCreated = await this.eventRepository.create({
      ...event,
      createdAt: new Date(),
      updatedAt: new Date()},
    );
    return await this.eventRepository.save(eventCreated);
  }

  async findAll(): Promise<EventInterface[]> {
    return await this.eventRepository.find();
  }

  async findById(id: number): Promise<EventInterface> {
    return await this.eventRepository.findOneOrFail(id);
  }
}
