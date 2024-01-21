import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../shared/models/Shop';

import { ShopService } from '../services/shop/shop.service';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  shop: Shop[] =[] ;
  productId:number|undefined;
  singleProduct:Shop|undefined;
constructor(private route: Router,private shopService:ShopService,private activatedRoute :ActivatedRoute){this.shopService.getAllshop().then((list:Shop[])=>{
  this.shop=list
})
this.activatedRoute.params.subscribe ((params =>{
  this.productId=Number(params['id'])
  this.shopService.getproductbyid(this.productId).then((item =>{
    this.singleProduct=item
  }))

}))
}

  // constructor(private activatedRoute: ActivatedRoute, private router: Router, private shopService: ShopService) {
  //   this.activatedRoute.params.subscribe(params => {
  //     let shopId= params['id'];
  //     this.shop =shopService.getAllShop();

    // })

      // this.shop = shopService.getAllShop(this.shopID);
  }

  // navigateToShop(shopId: number): void {
  //   this.router.navigate(['/shop', shopId]);
  // }






