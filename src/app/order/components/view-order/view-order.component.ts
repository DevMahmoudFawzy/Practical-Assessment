import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { OrderDetails } from '../../models/order-details.model';
import { Customer } from 'src/app/customer/models/customer.model';
import { CustomerService } from 'src/app/customer/services/customer.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent extends BaseComponent implements OnInit {

  orderDetails: OrderDetails = { Order: { OrderDate: '', OrderId: '', PaymentType: '', Products: [], UserId: '' }, ProductsToDisplay: [] };
  orderCustomer: Customer = { Id: '', Address: '', Email: '', Name: '', Phone: '', RegisterDate: '' };
  totalPrice: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _customerService: CustomerService
  ) {
    super();
  }

  ngOnInit(): void {
    const data = this._route.snapshot.data['orderDetails'];
    this.orderDetails = data;
    console.log(data);
    for (let index = 0; index < data.ProductsToDisplay.length; index++) {
      this.totalPrice += data.ProductsToDisplay[index].ProductPrice;
    }
    this._customerService.getCustomer(data.Order.UserId).subscribe((customer) => {
      this.orderCustomer = customer;
      console.log(customer);
    });
  }

  getProductDetails(productId: number) {
    let productIndex = this.orderDetails.ProductsToDisplay.findIndex(p => p.ProductId == productId);
    return productIndex !== -1 ? this.orderDetails.ProductsToDisplay[productIndex] : null;
  }

}
