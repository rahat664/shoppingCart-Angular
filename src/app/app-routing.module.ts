import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'button', component: ButtonComponent },
  {path:"product_details",component:ProductDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule],
})
export class AppRoutingModule {}
