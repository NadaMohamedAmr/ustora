import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import CartItem from '../shared/models/CartItem';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!:Cart;
  productCount: number = 0;
constructor(private cartservice : CartService, private router :Router){
this.setCart();
}
setCart(){
  this.cart=this.cartservice.getcart();
}
onCheckoutButtonClick() {
  // Navigate to the 'checkout' route
  this.router.navigate(['/checkout']);
}
// updateProductCount() {
//   this.productCount = this.cartservice.getProductCount();
// }
}

// export class CartComponent implements OnInit {
// cart!:Cart;
// cartItems: CartItem[] = []

// constructor(private cartService : CartService){
//   this.setCart
// }
// setCart(){
//   this.cart= this.cartService.getCart();
// }
// ngOnInit(): void {

// }
// removeFromCart(cartItem:CartItem){
//   this.cartService.removeFromCart(cartItem.id);
//   this.setCart();
// }

// changeQuantity(cartItem:CartItem, quantityInString:string){
//   const quantity = parseInt(quantityInString)
// this.cartService.changeQuantity(cartItem.shop.id, quantity)
// this.setCart();
// }
// }



