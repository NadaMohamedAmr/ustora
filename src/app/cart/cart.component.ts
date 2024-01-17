import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cart!:Cart;
constructor(private cartservice : CartService){
this.setCart();
}
setCart(){
  this.cart=this.cartservice.getcart();
}
}
