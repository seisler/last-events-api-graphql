import {IsDefined, Length, MinLength} from 'class-validator';
import { EventInput } from '../../graphql/graphql.schema';

export class CreateEventDto extends EventInput {
  @IsDefined()
  @Length(10, 250)
  name: string;

  @IsDefined()
  @MinLength(10)
  description: string;

  @IsDefined()
  location: string;

  @IsDefined()
  price: string;
}
