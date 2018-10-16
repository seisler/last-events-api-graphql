export class EventInput {
    name?: string;
    description?: string;
    locationHall?: string;
    locationStreet?: string;
    locationCity?: string;
    locationPostcode?: string;
    priceAmount?: number;
    priceCurrency?: string;
}

export class Event {
    id: number;
    name: string;
    description: string;
    location: Location;
    price?: Price;
}

export class Location {
    hall?: string;
    street: string;
    city: string;
    postcode: string;
}

export abstract class IMutation {
    abstract createEvent(input?: EventInput): Event | Promise<Event>;
}

export class Price {
    amount: number;
    currency: string;
}

export abstract class IQuery {
    abstract getEvents(): Event[] | Promise<Event[]>;

    abstract event(id: string): Event | Promise<Event>;

    abstract temp__(): boolean | Promise<boolean>;
}
