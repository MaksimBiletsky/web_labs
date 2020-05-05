import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  baseUrl = 'http://localhost:8000/move/shoe/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getSearchedProducts(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?search=${name}`);
  }
  getFilteredProducts(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}`, {params: new HttpParams().set('brand__in', data)} );
  }
  addToCart(shoe_id: number){
    shoe_id *= 5;
    return this.http.get(`http://localhost:8000/move/add/${shoe_id}/40/1`);
  }
}
