import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkCard } from "./drink-card/drink-card.model";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinkShopList: DrinkCard[];
  private obShops:Observable<DrinkCard[]>

  constructor(private http: HttpClient) { 
    // if (this.drinkShopList) {
      // this.drinkShopList = [
      //   { name: '五十嵐', tel: '0987654333', bisTimes: '11:00 ~ 23:00', bisDates: '週一 ~ 週日'},
      //   { name: '迷客夏', tel: '0912345678', bisTimes: '10:30 ~ 22:30', bisDates: '週一 ~ 週日'},
      //   { name: 'Comebuy', tel: '0987123465', bisTimes: '09:30 ~ 23:00', bisDates: '週二 ~ 週日'}
      // ]
    // }
    this.getShops()
   }

  getShops(): Observable<DrinkCard[]>{
    console.log('getShops')
    let res: Observable<DrinkCard[]>;
    try{
      res = this.http.post<DrinkCard[]>('/api/shops','')
    } catch {
      res = new Observable<DrinkCard[]>();
    }
    this.obShops = res
    return res
  }

  getObShops () {
    return this.obShops
  }

  testShopsData () {
    return this.drinkShopList
  }

  setShops(shopList: DrinkCard[]) {
    this.drinkShopList = shopList
  }
  
  errorHandler(err) {
    console.log(err)
  }
}
