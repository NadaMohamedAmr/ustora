import { Component } from '@angular/core';
import { Shop } from '../shared/models/Shop';
import { ShopService } from '../services/shop/shop.service';
import { CartService } from '../services/cart/cart.service';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
shop: Shop[] =[] ;
constructor(private shopService:ShopService,
  private cartService:CartService,
  private router: Router){this.shopService.getAllshop().then((list:Shop[])=>{
  this.shop=list
})
}



addCartItems(item: Shop) {
  this.cartService.addToCart(item);
  }
}
