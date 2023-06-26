import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent extends BaseComponent implements OnInit {

  order!: Order;

  constructor(
    private _route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this._route.data.subscribe(da => console.log(da));
  }

}
