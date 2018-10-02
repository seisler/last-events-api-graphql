import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EventsModule } from './events/events.module';
import { DatabaseModule } from './database/database.module';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
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

export class AppModule {}
