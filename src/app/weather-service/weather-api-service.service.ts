import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherInterface } from '../model/climate-interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {

  constructor( private http: HttpClient ) { }

  getWeatherData(city: string): Observable<WeatherInterface>{
    return this.http.get<WeatherInterface>(`${environment.WEATHER_API_BASE_URL}/weather/?q=${city}&appid=${environment.WEATHER_API_KEY}&units=metric`);
  }
}
