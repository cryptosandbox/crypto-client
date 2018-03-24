import { Holding } from './holding';

export class User {
  constructor(
    public _id: string,
    public name: string,
    public email: string,
    public password: string,
    public passwordConf: string,
    public holdings: Holding[]
  ) { }
}