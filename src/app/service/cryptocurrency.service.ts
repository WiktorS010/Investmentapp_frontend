import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cryptocurrency} from "../interface/cryptocurrency";

@Injectable({
  providedIn: 'root',
})
export class CryptocurrencyService {
  constructor(private http: HttpClient) {}

  getCryptocurrencyList(): Observable<Cryptocurrency[]> {
    return this.http.get<Cryptocurrency[]>('http://localhost:8080/cryptocurrency/list');
  }
  sendInfoFromCryptoList(symbol: string): Observable<any> {
    const requestBody = {symbol: symbol}
    return this.http.post<any>('http://localhost:8080/cryptocurrency/list', requestBody);
  }
  getCryptoInfo(): Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>('http://localhost:8080/investment/save')
  }
}
