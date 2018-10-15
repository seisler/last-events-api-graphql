import {Location} from '../location.entity';
import {Price} from '../price.entity';
import {Timestamp} from '../../../common/lib/date/Timestamp';

export interface Event {
  id?: number;
  name?: string;
  description?: string;
  location?: Location;
  price?: Price;
  timestamp?: Timestamp;
}
