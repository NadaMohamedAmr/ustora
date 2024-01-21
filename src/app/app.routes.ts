import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

export const routes: Routes = [
  {path : '' , component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'shop', component:ShopComponent},
  {path:'shop/:id', component:SingleproductComponent},
  { path: 'singleproduct/:id', component: SingleproductComponent },


];
