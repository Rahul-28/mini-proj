import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherInterface } from '../model/climate-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {

  WEATHER_API_BASE_URL ='https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY = 'f9c023d383bba1a696ca8371629d9b4e';

  constructor( private http: HttpClient ) { }

  getWeatherData(city: string): Observable<WeatherInterface>{
    return this.http.get<WeatherInterface>(`${this.WEATHER_API_BASE_URL}/weather/?q=${city}&appid=${this.WEATHER_API_KEY}&units=metric`);
  }
}
