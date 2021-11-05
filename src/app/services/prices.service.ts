import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACKEND: string = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor( private http: HttpClient ) { }

  getPrice(): Observable<any> {
    return this.http.get(`${ URL_BACKEND }/price`);
  }
}
