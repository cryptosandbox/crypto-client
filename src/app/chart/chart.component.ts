import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CryptoService } from '../crypto.service';
declare let d3: any;

import 'd3';
import 'nvd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  options;
  data;

  constructor(
    public cryptoService: CryptoService
  ) { 

    //this.data = this.cryptoService.d3ChartData
  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'candlestickBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 60
        },
        x: function (d) { return d['date']; },
        y: function (d) { return d['close']; },
        duration: 100,

        xAxis: {
          tickFormat: function (d) {
            var dt = new Date(d * 1000)
            return (dt.getMonth() + 1) + '/' + dt.getDate() + ' ' + dt.toLocaleTimeString()
          },
          showMaxMin: false
        },

        yAxis: {
          axisLabel: 'Market Price',
          tickFormat: function (d) {
            return '$' + d3.format(',.1f')(d);
          },
          showMaxMin: false
        },
        zoom: {
          enabled: true,
          scaleExtent: [1, 10],
          useFixedDomain: false,
          useNiceScale: false,
          horizontalOff: false,
          verticalOff: true,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    };

  }
}