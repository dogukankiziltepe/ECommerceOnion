import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './client/components/home/home.component';

const routes: Routes = [
  {path:'admin', component:LayoutComponent, children:[
    {path:'', component:DashboardComponent},
    {path:'products', loadChildren:()=>import('./admin/components/products/products.module').then(m=>m.ProductsModule)},
    {path:'orders', loadChildren:()=>import('./admin/components/orders/orders.module').then(m=>m.OrdersModule)},
    {path:'customers', loadChildren:()=>import('./admin/components/customers/customers.module').then(m=>m.CustomersModule)}
    ]
  },
  {path:'',component:HomeComponent},
  {path:'basket', loadChildren:()=>import('./client/components/basket/basket.module').then(m=>m.BasketModule)},
  {path:'products', loadChildren:()=>import('./client/components/products/products.module').then(m=>m.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
