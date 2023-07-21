import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService){  }

  weatherData?:weatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('wellington')
    .subscribe({
      next:(response )=>{
        this.weatherData= response;
        console.log(response);
      }
    });
  }
}
