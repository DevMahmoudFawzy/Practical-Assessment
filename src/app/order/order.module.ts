import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';


@NgModule({
  declarations: [
    ListOrderComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
