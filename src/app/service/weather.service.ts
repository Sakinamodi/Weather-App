import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environment/environment';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string) :Observable<weatherData>{
    return this.http.get<weatherData>(Environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(Environment.XRapidAPIHostHeaderName, Environment.XRapidAPIHostHeaderValue)
        .set(Environment.XRapidAPIKeyHeaderName, Environment.XRapidAPIKeyHeaderValue),

      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
