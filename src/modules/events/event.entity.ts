'use strict';

import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BeforeValidate,
} from 'sequelize-typescript';

import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import {MessageCodeError} from '../common/lib/error/MessageCodeError';

const tableOptions: IDefineOptions = { timestamp: true, tableName: 'events' } as IDefineOptions;

@Table(tableOptions)
export class Event extends Model<Event> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public id: number;

    @Column({
        type: DataType.CHAR(50),
        allowNull: false,
    })
    public name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    public description: string;

    @Column
    public startDate: Date;

    @Column
    public endDate: Date;

    @CreatedAt
    public createdAt: Date;

    @UpdatedAt
    public updatedAt: Date;

    @DeletedAt
    public deletedAt: Date;

    @BeforeValidate
    public static validateData(event: Event, options: any) {
        if (!options.transaction) throw new Error('Missing transaction.');
        if (!event.name) throw new MessageCodeError('event:create:missingName');
        if (!event.description) throw new MessageCodeError('event:create:missingDescription');
        if (!event.startDate) throw new MessageCodeError('event:create:missingStartDate');
        if (!event.endDate) throw new MessageCodeError('event:create:missingEndDate');
        if (event.endDate >= event.startDate) throw new MessageCodeError('event:create:startEndInconsistency');
    }
}
