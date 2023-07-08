import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent extends BaseComponent implements OnInit {

  customers: Customer[] = [];
  errorMessage: string = '';

  constructor(private _customerService: CustomerService) {
    super();
  }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (err) => this.errorMessage = err,
      complete: () => console.info('complete')
    });
  }

}