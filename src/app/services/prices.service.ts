import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const URL_BACKEND: string = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor( private http: HttpClient ) { }

  getPrice(): Observable<any> {
    return this.http.get(`${ URL_BACKEND }/price`);
  }

  getPriceforASymbol(symbol: string): Observable<any> {
    return this.http.get(`${ URL_BACKEND }/pricesforsymbol/${ symbol }`)
            .pipe(
              map(resp => {
                const data = Object.entries(resp);
                return data;
              })
            );
  }
}
