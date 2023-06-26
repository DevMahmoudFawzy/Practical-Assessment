import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';

export const orderResolver: ResolveFn<Order> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(OrderService).getOrder(route.paramMap.get('id')!);
    };