import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  private apiKey = 'a3ea8f8660f6f96f56d4f731f6edb8f3'
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
