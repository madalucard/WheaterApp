import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.scss',
})
export class WeatherChartComponent {
  @Input() chartData: any;
}
