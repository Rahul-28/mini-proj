import { Component, OnInit } from '@angular/core';
import { WeatherApiServiceService } from './weather-service/weather-api-service.service';
import { WeatherInterface } from './model/climate-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatheservice: WeatherApiServiceService ) {}

  cityName: string = 'madurai';
  weatherData?: WeatherInterface;

  ngOnInit(): void {
    this.retrieveWeatherData(this.cityName);
  }

  onSubmit() {
    this.retrieveWeatherData(this.cityName);
    this.cityName = '';
  }
  
  private retrieveWeatherData(cityName: string) {
    this.weatheservice.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }
}
