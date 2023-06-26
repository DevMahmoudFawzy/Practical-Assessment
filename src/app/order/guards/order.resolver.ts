import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { OrderService } from '../services/order.service';
import { OrderDetails } from '../models/order-details.model';

export const orderResolver: ResolveFn<OrderDetails> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(OrderService).getOrder(route.paramMap.get('id')!);
    };