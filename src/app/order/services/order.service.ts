import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';

import { Order } from '../models/order.model';
import { ProductService } from 'src/app/product/services/product.service';
import { environment } from 'src/environments/environment';
import { OrderDetails } from '../models/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // Injecting product service in orders service.
  // In order to get the details of the products in a specific order.
  constructor(
    private _http: HttpClient,
    private _productService: ProductService
  ) { }

  getOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(environment.orderServiceEndPoint).pipe(catchError(this.errorHandler));
  }

  getOrdersAndProducts(): Observable<any> {
    let orders = this._http.get<Order[]>(environment.orderServiceEndPoint);

    return orders.pipe(
      mergeMap((orders) => {
        return this._productService.getAllProducts().pipe(
          map(allProducts => {
            return { allOrders: orders, allProducts };
          })
        )
      }),
      catchError(this.errorHandler)
    );
  }

  getOrder(id: string): Observable<OrderDetails> {

    let orders = this._http.get<Order[]>(environment.orderServiceEndPoint);

    return orders.pipe(
      map(allOrders => allOrders.find(singleOrder => singleOrder.OrderId == id)),
      mergeMap((selectedOrder) => {
        let selectedOrderProducts = selectedOrder?.Products;
        return this._productService.getAllProducts().pipe(
          map(allProducts => {
            let productsToDisplay = allProducts.filter(a => selectedOrderProducts?.findIndex(b => b.ProductId == a.ProductId) !== -1);
            let dataToSend: OrderDetails = { Order: selectedOrder, ProductsToDisplay: productsToDisplay };
            return dataToSend;
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


