export class EventInput {
    name?: string;
    description?: string;
    location?: string;
    price?: string;
}

export class Event {
    id: number;
    name: string;
    description: string;
    location: string;
    price: string;
}

export class Location {
    hall?: string;
    street?: string;
    city?: string;
    postcode?: string;
}

export abstract class IMutation {
    abstract createEvent(input?: EventInput): Event | Promise<Event>;
}

export abstract class IQuery {
    abstract getEvents(): Event[] | Promise<Event[]>;

    abstract event(id: string): Event | Promise<Event>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract eventCreated(): Event | Promise<Event>;
}
