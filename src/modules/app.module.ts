import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EventsModule } from './events/events.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    EventsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
