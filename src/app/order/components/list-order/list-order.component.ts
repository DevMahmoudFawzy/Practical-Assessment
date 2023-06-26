import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent extends BaseComponent implements OnInit {

  orders!: Order[];
  errorMessage: string = '';

  constructor(private _orderService: OrderService) {
    super();
  }

  ngOnInit(): void {
    this._orderService.getAllOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => this.errorMessage = err,
      complete: () => console.info('complete')
    });
  }
}
