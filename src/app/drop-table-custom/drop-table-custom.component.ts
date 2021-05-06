import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-table-custom',
  templateUrl: './drop-table-custom.component.html',
  styleUrls: ['./drop-table-custom.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DropTableCustomComponent implements OnInit {



  innerData1: fakeData[] = [
    { name: 'inner data 1', desc: 'I can fly' },
    { name: 'inner data 2', desc: 'I can drink' },
    { name: 'inner data 3', desc: 'I can eat' }
  ];

  innerData2: fakeData[] = [
    { name: 'inner data www 1', desc: 'I can fly' },
    { name: 'inner data www 2', desc: 'I can drink' },
    { name: 'inner data www 3', desc: 'I can eat' }
  ];

  innerData3: fakeData[] = [
    { name: 'inner data lalala 1', desc: 'I can fly' },
    { name: 'inner data lalala 2', desc: 'I can drink' },
    { name: 'inner data lalala 3', desc: 'I can eat' }
  ];

  datasource: fakeData[] = [
    { name: 'test1', desc: 'desc1', content: this.innerData1, isExpanded: false},
    { name: 'test2', desc: 'desc2',  content: this.innerData2, isExpanded: false},
    { name: 'test3', desc: 'desc3', content: this.innerData3, isExpanded: false}
  ];

  items = this.datasource;



  constructor() { }

  syncTable(): void {
    this.items = this.datasource;
  }

  clearTable(): void {
    this.items = [];
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);

  }

  innerDrop(event: CdkDragDrop<string[]>, datasource): void {
    moveItemInArray(datasource, event.previousIndex, event.currentIndex);
  }

  addRow(): void{
    const newFakeData: fakeData =  { name: 'test3', desc: 'desc3', isExpanded: false};
    this.items.push(newFakeData);
  }

  showData(): any{
    return JSON.stringify(this.items);
  }
}


export interface fakeData {
  name: string;
  desc: string;
  content?: fakeData[];
  isExpanded?: boolean;
}
