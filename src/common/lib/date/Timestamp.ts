import {BeforeUpdate, CreateDateColumn, UpdateDateColumn} from 'typeorm';

export class Timestamp {
  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updatedAt = new Date();
  }
}

export const newTimestamp = () => (
  {
    timestamp: {
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }
);
