import {Column} from 'typeorm';

export class Price {
  @Column('float')
  public amount: number;

  @Column()
  public currency: string;
}
