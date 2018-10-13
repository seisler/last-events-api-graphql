'use strict';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({length: 200})
  public name: string;

  @Column('text')
  public description: string;

  @Column()
  public location: string;

  @Column()
  public price: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
