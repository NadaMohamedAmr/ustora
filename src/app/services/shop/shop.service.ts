import { Injectable } from '@angular/core';
import { Shop } from '../../shared/models/Shop';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  //Get All products (read)
  dataApiUrl = "http://localhost:3000/Products"
  async getAllshop(): Promise<Shop[]> {
    const shopproduct = await fetch(this.dataApiUrl)
    console.log(shopproduct)
    return (await shopproduct.json()) ?? []
  }
//Get product by ID (read)
  async getproductbyid(id: number): Promise<Shop | undefined> {
    const singleproduct = await fetch(`${this.dataApiUrl}/${id}`)
    return (await singleproduct.json()) ?? []
}

}
