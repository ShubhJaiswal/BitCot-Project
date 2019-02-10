import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductComponent } from '../cart/cart-product/cart-product.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductService } from './shared/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../auth/shared/auth.gaurd';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material';

@NgModule({

    declarations : [
        ProductComponent,
        ProductListComponent,
        ProductListItemComponent,
        ProductDetailComponent,
        CartProductComponent    
    ],
    imports : [CommonModule, HttpClientModule, MatButtonModule],
    entryComponents: [
        ProductDetailComponent
      ],
    providers : [ProductService,AuthGuard]
})

export class ProductModule {

} 