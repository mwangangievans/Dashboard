import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { exchangeRatesInterface } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient) { }


  getExchangerates():Observable<exchangeRatesInterface[]>{
    return this.http.get<exchangeRatesInterface[]>(environment.api_base_url
      ).pipe(map((res)=>{
        return res
      }))
  }
}
