import {Address} from './address';

export class Item {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
