import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../shared/models/Cart';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cart!:Cart;
  productCount:number=0;
  constructor(private cartservice : CartService, private router :Router){
  this.setCart();
  }
  setCart(){
    this.cart=this.cartservice.getcart();
  }
  // updateProductCount() {
  //   this.productCount = this.cartservice.getProductCount();
  // }
}
