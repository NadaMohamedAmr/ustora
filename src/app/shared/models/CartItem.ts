import { Shop } from "./Shop";

export default class CartItem {
id!:number;
shop!:Shop
quantity:number =1;

constructor(shop:Shop){
  this.shop= shop;
  this.price;

}
get price(): number {
return this.shop.price * this.quantity;
}



}
