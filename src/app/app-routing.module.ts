import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './home/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { breadCrumb: 'Home' }
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        // canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
        // canActivate: [AuthGuard],
      },
      {
        path: 'customers',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
