import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit {

  imgUrl: string;

  constructor(public dialogRef: MatDialogRef<PopupModalComponent>, @Inject(MAT_DIALOG_DATA) public data: PopupData) {
    this.imgUrl = data.imgUrl
  }

  ngOnInit() {
  }

}

export interface PopupData {
  imgUrl: string;
}