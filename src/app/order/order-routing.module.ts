import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrderComponent } from './components/list-order/list-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { orderResolver } from './guards/order.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListOrderComponent,
    data: { breadCrumb: 'Orders List' }
  },
  {
    path: ':id',
    component: ViewOrderComponent,
    data: { breadCrumb: 'View Order' },
    resolve: { orderDetails: orderResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
