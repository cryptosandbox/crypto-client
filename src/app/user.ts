import { Holding } from './holding';

export class User {
  constructor(
    public _id: string,
    public name: string,
    public email: string,
    public wallet: Array<Holding>
  ) { }
}