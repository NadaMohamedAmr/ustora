import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Shop } from '../../shared/models/Shop';
import CartItem from '../../shared/models/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  cartItems: any;
  constructor() { }
// add new items to cart
  addToCart(shop: Shop): void {
    this.cart.items.push(new CartItem (shop));
    // this.cartItems.push(product);
 }


// Get the total number of items in the cart

// getProductCount(): number {
//   return this.cartItems.length;
// }

  //display cart elements (items)
  getcart(): Cart {
    return this.cart;
  }
  // getCart():Cart{
  //   return this.cart;
  // }

  // add new items to cart
//   addToCart(shop:Shop):void{
//     let cartItem =this.cart.items.find(item => item.shop.id === shop.id);
//     if(cartItem){
//       this.changeQuantity(shop.id, cartItem.quantity + 1);
//       return;
//      }
// this.cart.items.push(new CartItem(shop));
//     }
    // removeFromCart(shopId:number):void {
    //   this.cart.items =
    //   this.cart.items.filter( item => item.shop.id!=shopId)
    // }
    // changeQuantity(shopId:number, quantity:number){
    //  let cartItem = this.cart.items.find(item => item.shop.id === shopId);
    //  if(!cartItem)return;
    //  cartItem.quantity = quantity;
    // }



  }




