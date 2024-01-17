import { Injectable } from '@angular/core';
import { Shop } from '../../shared/models/Shop';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getAllShop(): Shop[] {
    const shop: Shop[] =
      [
        {
          id: 1,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-2.jpg"
        },

        {
          id: 2,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-1.jpg"
        },
        {
          id: 3,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-3.jpg"
        },
        {
          id: 4,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-4.jpg"
        },

        {
          id: 5,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-2.jpg"
        },
        {
          id: 6,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-1.jpg"
        },
        {
          id: 7,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-3.jpg"
        },

        {
          id: 8,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-4.jpg"
        },
        {
          id: 9,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-2.jpg"
        },
        {
          id: 10,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-1.jpg"
        },
        {
          id: 11,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-3.jpg"
        },

        {
          id: 12,
          title: "Apple new mac book 2015 March :P",
          price: 999.00,
          discount: 899.00,
          photo: "../../../assets/img/product-4.jpg"
        },
      ];
      return shop;
  }

}
