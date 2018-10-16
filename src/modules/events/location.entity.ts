import {Column} from 'typeorm';

export class Location {
  @Column({nullable: true, default: null})
  hall?: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  postcode: string;
}
