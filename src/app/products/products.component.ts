import { Component } from '@angular/core';
import { productsList } from '../products/products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList = productsList;

  constructor() { }

  ngOnInit(): void {
  }

}
