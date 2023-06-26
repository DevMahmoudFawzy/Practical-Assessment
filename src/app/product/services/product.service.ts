import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "assets/data/products.json";

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'server error'));
  }
}
