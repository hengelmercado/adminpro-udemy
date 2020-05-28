import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: number[] = [];
  @Input() pieChartType: ChartType = 'pie';
  @Input() pieChartLegend = true;
  @Input() pieChartColors = [];
  @Input() leyenda = '';

  constructor() { }

  ngOnInit(): void {
  }

}
