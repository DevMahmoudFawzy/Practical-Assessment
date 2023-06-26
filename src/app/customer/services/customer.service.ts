import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Customer } from '../models/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // Injecting product service in orders service.
  // In order to get the details of the products in a specific order.
  constructor(
    private _http: HttpClient
  ) { }

  getCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(environment.customerServiceEndPoint).pipe(catchError(this.errorHandler));
  }

  getCustomer(customerId: string): Observable<any> {
    return this._http.get<Customer[]>(environment.customerServiceEndPoint).pipe(
      map(c => c.find(a => a.Id == customerId)),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'server error'));
  }
}
