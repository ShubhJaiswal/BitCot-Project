import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product/shared/product.service';
@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  product: any = [];

  productAddedTocart: any[];


  ngOnInit() {

    this.product = this.route.params["value"];

    this.productAddedTocart = this.productService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(this.product);
      this.productService.addProductToCart(this.productAddedTocart);

    }
    else {
      let tempProduct = this.productAddedTocart.find(
        p => {
          return p.id == this.product.id
        });
      if (tempProduct == undefined) {
        this.productAddedTocart.push(this.product);
        this.productService.addProductToCart(this.productAddedTocart);
      }

    }



  }
  buyProduct() {
    alert('This functionlity is not done');
  }


}
