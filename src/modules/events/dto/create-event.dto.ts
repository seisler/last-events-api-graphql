import { Length } from 'class-validator';
import { EventInput } from '../../graphql/graphql.schema';

export class CreateEventDto extends EventInput {
  @Length(10, 250)
  name: string;
}
