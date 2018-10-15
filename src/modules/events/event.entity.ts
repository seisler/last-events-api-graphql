'use strict';

import {Location} from './location.entity';
import {Timestamp} from '../../common/lib/date/Timestamp';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Price} from './price.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({length: 200})
  public name: string;

  @Column('text')
  public description: string;

  @Column(type => Location)
  public location: Location;

  @Column(type => Price)
  public price: Price;

  @Column(type => Timestamp)
  public timestamp: Timestamp;
}
