'use strict';

export interface IDatabaseConfigAttributes {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    entities: any[];
    type: string;
    synchronize: boolean;
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
}
