'use strict';

export interface IDatabaseConfigAttributes {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    entities: string[];
    type: string;
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
}
