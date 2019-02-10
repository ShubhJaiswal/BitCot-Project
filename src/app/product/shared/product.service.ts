import { Injectable } from '@angular/core';
import { Product } from './product.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartProductComponent } from '../../cart/cart-product/cart-product.component';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {

  showCartItems : boolean = false ;
  _url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient, private router: Router) { }

  public getProducts() : Observable<Product[]>    { 
     return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/photos?_limit=4');
  }

  public cartProduct(product : any):any{ debugger
    //this.showCartItems = true;
    this.router.navigate(['/cart',product])
    //alert('Item added to cart');
  }
}
