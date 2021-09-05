import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Productinterface} from "./productinterface";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) {
  }

  /** GET heroes from the server */
  getProduct(): Observable<Productinterface[]> {
    return this.http.get<Productinterface[]>(this.productUrl);
  }

}
