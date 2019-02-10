import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  //@Input() product: any;
  product: any;
  
  ngOnInit() { debugger
    //this.route.params;
    this.product = this.route.params["value"]
    console.log(this.product.id);
    //console.log(this.product);
  }

}
