import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';
import {EventsService} from './events.service';
import {CreateEventDto} from './dto/create-event.dto';
import {Event} from './interfaces/event.interface';

const pubSub = new PubSub();

@Resolver('Event')
export class EventResolver {
    constructor(private readonly eventService: EventsService) {
    }

    @Query('event')
    async getEvent(@Args('id') id: number) {
        return await this.eventService.findById(id);
    }

    @Query('getEvents')
    async getAll() {
        return await this.eventService.findAll();
    }

    @Mutation('createEvent')
    async create(@Args('input') args: CreateEventDto): Promise<Event> {
        const event = await this.eventService.createAndSave(mapInputToEvent(args));
        pubSub.publish('eventCreated', {eventCreated: event});

        return event;
    }
}

const mapInputToEvent = (args: CreateEventDto): Event => ({
    name: args.name,
    description: args.description,
    location: {
        hall: args.locationHall,
        street: args.locationStreet,
        city: args.locationCity,
        postcode: args.locationPostcode,
    },
    price: {
        amount: args.priceAmount,
        currency: args.priceCurrency,
    },
});
