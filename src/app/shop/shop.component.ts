import { Component } from '@angular/core';
import { Shop } from '../shared/models/Shop';
import { ShopService } from '../services/shop/shop.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
shop: Shop[] ;
constructor (private shopService:ShopService, private cartService: CartService){

  this.shop = shopService.getAllShop();
}
addCartItems(item: Shop) {
  this.cartService.addToCart(item);
}
}
