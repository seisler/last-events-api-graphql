import {IsDefined, Length, MinLength} from 'class-validator';
import {EventInput, Location, Price} from '../../graphql/graphql.schema';

export class CreateEventDto extends EventInput {
  @IsDefined()
  @Length(10, 250)
  name: string;

  @IsDefined()
  @MinLength(10)
  description: string;

  @IsDefined()
  locationStreet: string;

  @IsDefined()
  locationCity: string;

  @IsDefined()
  locationPostcode: string;

  @IsDefined()
  priceAmount: number;

  @IsDefined()
  priceCurrency: string;
}
