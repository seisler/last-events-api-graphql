'use strict';

import { IDatabaseConfig } from './interfaces/IDatabase';

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 3306,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        type: 'mysql',
    },
};
