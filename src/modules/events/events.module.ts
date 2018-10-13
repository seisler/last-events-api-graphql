'use strict';

import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';
import {databaseConfig} from '../../common/config/database';
import {EventResolver} from './event.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event], databaseConfig[process.env.NODE_ENV]),
  ],
  controllers: [],
  providers: [
    EventsService,
    EventResolver,
  ],
  exports: [
    EventsService,
  ],
})

export class EventsModule {
}
