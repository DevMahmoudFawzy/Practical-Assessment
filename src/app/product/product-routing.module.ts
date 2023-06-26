import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    data: { breadCrumb: 'Products List' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
