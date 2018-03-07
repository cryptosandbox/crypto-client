export class Ticket {
  constructor(
    public coin: string,
    public last: number,
    public balance: number,
    public quantity: number,
  ) { }

  get theoBuy(): number {
    return this.balance + this.quantity;
  }

  get theoBuyValue(): number {
    return this.theoBuy * this.last;
  }

  get theoSell(): number {
    return this.balance - this.quantity;
  }

  get theoSellValue(): number {
    return this.theoSell * this.last;
  }

  get value(): number {
    return this.quantity * this.last;
  }
}