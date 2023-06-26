import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, concatMap, filter, map, mergeMap, of, switchMap, throwError } from 'rxjs';

import { Order } from '../models/order.model';
import { ProductService } from 'src/app/product/services/product.service';
import { Product } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = "assets/data/orders.json";

  constructor(
    private _http: HttpClient,
    private _productService: ProductService
  ) { }

  getAllOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(this.url).pipe(catchError(this.errorHandler));
  }

  getOrder(id: string): Observable<any> {

    let orders = this._http.get<Order[]>(this.url);
    let products = this._http.get<Product[]>("assets/data/products.json");

    return orders.pipe(
      map(allOrders => allOrders.find(singleOrder => singleOrder.OrderId == id)),
      mergeMap(selectedOrder => {
        let selectedOrderProducts = selectedOrder?.Products;
        return products.pipe(
          map(allProducts => {
            let productsToDisplay = allProducts.filter(a => selectedOrderProducts?.findIndex(b => b.ProductId == a.ProductId) !== -1);
            return { selectedOrder, productsToDisplay };
          })
        )
      }),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'server error'));
  }
}


