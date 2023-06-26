import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { OrderDetails } from '../../models/order-details.model';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent extends BaseComponent implements OnInit {

  orderDetails!: OrderDetails

  constructor(
    private _route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const data = this._route.snapshot.data['orderDetails'];
    this.orderDetails = data;
    console.log(data);
  }

  getOrderDetails() {
    if (this.orderDetails) {
      return this.orderDetails;
    } else {
      let placeholder: OrderDetails = { Order: { OrderDate: '', OrderId: '', PaymentType: '', Products: [], UserId: '' }, ProductsToDisplay: [] };
      return placeholder;
    }
  }

  getProductDetails(productId: number) {
    let productIndex = this.getOrderDetails().ProductsToDisplay.findIndex(p => p.ProductId == productId);
    return productIndex !== -1 ? this.getOrderDetails().ProductsToDisplay[productIndex] : null;
  }

}
