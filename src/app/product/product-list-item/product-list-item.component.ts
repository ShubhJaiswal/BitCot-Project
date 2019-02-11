import { Component, OnInit , Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../shared/product.service';
import { CartProductComponent } from '../../cart/cart-product/cart-product.component'
@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() products : any;
  
  constructor(private prodSer: ProductService,public dialog : MatDialog) { }
  
  openDialog(product) {
    console.log(product);
    const dialogRef = this.dialog.open(ProductDetailComponent,{
        data: {productInfo: product}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });   
  }

  cartProduct(product){ 
    
    console.log(product);
    this.prodSer.cartProduct(product);
  }
  

  ngOnInit() {
  }

}
