export class Coin {
  constructor(
    public coin: string,
    public last: number,
    public volume: number,
    public change: number
  ) { }
}