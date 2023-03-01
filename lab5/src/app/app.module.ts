import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductCategoriesComponent },
      { path: 'categories/:categoryId', component: ItemListComponent },
      {path: 'products/:productId', component: ProductItemComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductCategoriesComponent,
    ItemListComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

