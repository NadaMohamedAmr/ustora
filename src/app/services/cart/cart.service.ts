import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Shop } from '../../shared/models/Shop';
import CartItem from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: Cart = new Cart();
  constructor() { }
// add new items to cart
  addToCart(shop: Shop): void {
    this.cart.items.push(new CartItem (shop));



  }

  //display cart elements (items)
  getcart(): Cart {
    return this.cart;
  }
}
function removeFromCart(shopId: any, number: any) {
  throw new Error('Function not implemented.');
}

