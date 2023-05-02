import { Component, Input } from '@angular/core';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product!: product;


}
