import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EventsModule } from './events/events.module';
import { ConfigModule } from './config/config.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../common/config/database';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(databaseConfig[process.env.NODE_ENV]),
    EventsModule,
    GraphQLModule.forRoot({
      include: [],
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/modules/graphql/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
