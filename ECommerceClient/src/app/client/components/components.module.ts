import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketModule,
    ProductsModule,
    HomeModule
  ]
})
export class ComponentsModule { }
