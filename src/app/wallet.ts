import { Holding } from './holding';

export class Wallet {
  constructor(
    public _id: string,
    public holdings: Holding[]
  ) { }
}