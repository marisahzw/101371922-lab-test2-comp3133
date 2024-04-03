import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<any[]> {
    const result =  this.http.get<any[]>(this.apiUrl);
    console.log(result);
    return result;
  }

  getMissionsByYear(year: string): Observable<any[]> {
    const result =  this.http.get<any[]>(`${this.apiUrl}?launch_year=${year}`);
    console.log(result);
    return result;
  }

  getMissionByFlightNumber(flight_number: number): Observable<any> {
    const result =  this.http.get<any>(`${this.apiUrl}/${flight_number}`);
    console.log(result);
    return result;
  }
}
