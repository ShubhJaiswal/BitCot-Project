import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service'
import { Product } from '../shared/product.model'; 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]= [];   
  constructor(private prodSer : ProductService) {}

  ngOnInit() {
      this.prodSer.getProducts().subscribe(
      (data) => {
          this.products = data;
      });
  }

}
