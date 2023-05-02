import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';
import { product } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dev-app';
  http = inject(HttpClient);
  products: product[] = [];

  changeTitle() {
    this.title = 'Cambio de titulo';
  }
  ngOnInit() {
    this.http.get<product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
