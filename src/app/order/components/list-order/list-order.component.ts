import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { Product } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent extends BaseComponent implements OnInit {

  orders!: Order[];
  products!: Product[];
  errorMessage: string = '';

  constructor(private _orderService: OrderService) {
    super();
  }

  ngOnInit(): void {
    this._orderService.getOrdersAndProducts().subscribe(
      (orderDetails) => {
        this.orders = orderDetails.allOrders;
        this.products = orderDetails.allProducts;
        console.log(orderDetails);
      }
    );
  }

  getOrderTotalPrice(orderId: string) {
    let order = this.orders.find(a => a.OrderId == orderId);
    let orderProducts: any[] = order?.Products!;
    let orderTotalPrice = 0;
    for (let index = 0; index < orderProducts.length; index++) {
      orderTotalPrice += this.products.find(p => p.ProductId == orderProducts[index].ProductId)?.ProductPrice!;
    }
    return orderTotalPrice;
  }
}
