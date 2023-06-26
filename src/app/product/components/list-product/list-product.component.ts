import { Component, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent extends BaseComponent implements OnInit {

  products!: Product[];
  errorMessage: string = '';

  constructor(private _productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => this.errorMessage = err,
      complete: () => console.info('complete')
    });
  }

}
