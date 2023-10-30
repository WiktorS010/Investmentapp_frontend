import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Investment} from "../interface/investment";

@Injectable({providedIn: 'root'})
export class InvestmentService {
  constructor(private http: HttpClient) {
  }

  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>('http://localhost:8080/investment/list');
  }

  saveInvestment(symbol: string, investment: Investment): Observable<Investment> {
    const data = {symbol, investment};
    return this.http.post<Investment>('http://localhost:8080/investment/save', data);
  }

  deleteInvestment(id: number): Observable<Investment> {
    return this.http.delete<Investment>('http://localhost:8080/investment/delete/${id}');
  }
}

