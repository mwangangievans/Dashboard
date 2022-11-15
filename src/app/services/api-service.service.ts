import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { exchangeRatesInterface } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient) { }


  getExchangerates():Observable<exchangeRatesInterface[]>{


    return this.http.get<exchangeRatesInterface[]>('https://api2.binance.com/api/v3/ticker/24hr'
      ).pipe(map((res)=>{
        return res
      }))
  }
}
