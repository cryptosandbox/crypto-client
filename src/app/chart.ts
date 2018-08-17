export class ChartPoint {
  constructor(
    public date: number,
    public high: number,
    public low: number,
    public open: number,
    public close: number,
    public volume: number,
    public quoteVolume: number,
    public weightedAverage: number
  ) { }
}

export class d3ChartPoint {
  constructor(
    public date: number,
    public open: number,
    public high: number,
    public low: number,
    public close: number,
    public volume: number,
    public adjusted: number
  ) { }
}