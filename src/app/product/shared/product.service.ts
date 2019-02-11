import { Injectable } from '@angular/core';
import { Product } from './product.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartProductComponent } from '../../cart/cart-product/cart-product.component';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {

  showCartItems : boolean = false ;
  localProject = [];
  existing;
  _url = 'https://jsonplaceholder.typicode.com/photos?_limit=8';
  //https://jsonplaceholder.typicode.com/photos?_limit=4;
  constructor(private http: HttpClient, private router: Router) { }

  public getProducts() : Observable<Product[]>    { 
     return this.http.get<Product[]>(this._url);
  }

  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }
  
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }
  
  public cartProduct(product : any):any{ 
    
    this.router.navigate(['/cart',product]);   
  }
}
