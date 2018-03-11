export class Ticket {
  constructor(
    public coin: string,
    public last: number,
    public balance: number,
    public quantity: number,
  ) { }

  get value(): number {
    return this.quantity * this.last;
  }
}