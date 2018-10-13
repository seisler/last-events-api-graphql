'use strict';

import { IDatabaseConfig } from './interfaces/IDatabase';
import { Event } from '../../modules/events/event.entity';

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        synchronize: true,
        entities: [Event],
        type: 'mysql',
    },
};
