import { OnInit, Component, ViewEncapsulation } from "@angular/core";

declare function displayAll(): any
declare function mainjs(): any

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandlestickComponent implements OnInit{
  ngOnInit() {
    console.log("calling displayAll()")
    displayAll()
  }

  refresh() {
    mainjs()
    displayAll()
  }
}