import { Component, OnInit, Inject, Output} from '@angular/core';
import { ProductService } from '../shared/product.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule} from '@angular/material';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  ProductDetail = [];
  constructor(private prodSer : ProductService, public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() { 
    this.ProductDetail.push(this.data.productInfo);
  }

  cartProduct(product){ 
    
    console.log(product);
    this.prodSer.cartProduct(product);
    this.dialogRef.close();
   
  }
  close() {
    this.dialogRef.close();
  }


}
