import {Address} from './address';

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
