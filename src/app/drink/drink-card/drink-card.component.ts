import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrinkCard } from './drink-card.model'
import { PopupModalComponent } from './../../popup-modal/popup-modal.component'

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent implements OnInit {

  @Input()
  drinkCard: DrinkCard;

  private _name: number;

  @Input()
  set name(name: number) {
    this._name = name
  }

  get name(): number { return this._name; }
  
  imgUrl: string;

  constructor(public dialog: MatDialog) {
    this.imgUrl = 'http://www.i-write.idv.tw/life/info/picture/50lan/50lan-menu3.jpg'
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      data: {imgUrl: this.imgUrl}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
