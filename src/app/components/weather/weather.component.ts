import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/interfaces/weatherInterface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weatherInfo: Weather;

  constructor() { }

  ngOnInit() {
  }

}
