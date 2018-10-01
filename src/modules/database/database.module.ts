'use strict';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {databaseConfig} from '../common/config/database';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig[process.env.NODE_ENV || 'development']),
    ],
})

export class DatabaseModule {}
