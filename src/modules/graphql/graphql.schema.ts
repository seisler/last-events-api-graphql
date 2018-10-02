export class CreateEventInput {
  name: string;
  description: string;
}

export class Event {
  id?: number;
  name?: string;
  description?: string;
}

export abstract class IMutation {
  abstract createEvent(createEventInput?: CreateEventInput): Event | Promise<Event>;
}

export abstract class IQuery {
  abstract getEvents(): Event[] | Promise<Event[]>;

  abstract event(id: string): Event | Promise<Event>;

  abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
  abstract eventCreated(): Event | Promise<Event>;
}
