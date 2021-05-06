import { Component, OnInit } from '@angular/core';
import { DrinkCard } from './drink-card/drink-card.model'
import { Router } from '@angular/router'
import { DrinkService} from './drink.service'


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  shopList: DrinkCard[];
  count = 0;

  constructor(private drinkService: DrinkService, private router: Router) {
  }

  ngOnInit(): void {
    // this.drinkService.getShops().subscribe(item => this.shopList = item)
    console.log(this.drinkService.getObShops());
    this.drinkService.getObShops().subscribe(item => this.shopList = item);

  }


  addOne(): void {
    this.drinkService.setShops(this.shopList);
    this.router.navigate(['home']);
  }

}
