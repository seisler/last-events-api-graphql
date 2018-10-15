import {Column} from 'typeorm';

export class Location {
  @Column()
  hall: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  city: string;

  @Column()
  postcode: string;
}
