import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, concatMap, filter, map, throwError } from 'rxjs';

import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = "assets/data/orders.json";

  constructor(private _http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(this.url).pipe(catchError(this.errorHandler));
  }

  getOrder(id: string): Observable<Order> {
    return this._http.get<Order[]>(this.url).pipe(
      concatMap(orders => orders),
      filter(order => order.OrderId == id),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'server error'));
  }
}


