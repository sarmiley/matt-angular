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

  catheySys: FakeItem[] = [{
    itemName: '需求訪談',
    priority: '高',
    estStartDate: '2021/02/01',
    estEndDate: '2021/02/14',
    realStartDate: '2021/02/01',
    realEndDate: '2021/02/14',
    estComplateRate: 100,
    realComplateRate: 100,
    state: 'NOT STARTED',
    principal: '劉小明',
    isExpanded: false,
    doc: 'https://goo.gl/1357abc',
    subItem: [
      {
        itemName: '登入/登出',
        priority: '中',
        estStartDate: '2021/03/05',
        estEndDate: '2021/03/07',
        realStartDate: '2021/03/05',
        realEndDate: '2021/02/14',
        isExpanded: false,
        estComplateRate: 100,
        realComplateRate: 100,
        state: 'NOT STARTED',
        principal: '劉小明',
        doc: 'https://goo.gl/1357abc',
      },
      {
        itemName: '組織管理',
        priority: '中',
        estStartDate: '2021/03/07',
        estEndDate: '2021/03/09',
        realStartDate: '2021/03/05',
        realEndDate: '2021/02/14',
        isExpanded: false,
        estComplateRate: 100,
        realComplateRate: 100,
        state: 'NOT STARTED',
        principal: '劉小明',
        doc: 'https://goo.gl/1357abc',
      },
    ]
  },
  {
    itemName: '視覺搞設計版面定稿',
    priority: '中',
    estStartDate: '2021/02/15',
    estEndDate: '2021/03/01',
    realStartDate: '2021/03/05',
    realEndDate: '2021/02/14',
    isExpanded: false,
    estComplateRate: 100,
    realComplateRate: 100,
    state: 'NOT STARTED',
    principal: '劉小明',
    doc: 'https://goo.gl/1357abc',
  },
  {
    itemName: '系統分析與設計',
    priority: '高',
    estStartDate: '2021/02/20',
    estEndDate: '2021/03/15',
    realStartDate: '2021/03/05',
    realEndDate: '2021/02/14',
    isExpanded: false,
    estComplateRate: 100,
    realComplateRate: 100,
    state: 'NOT STARTED',
    principal: '劉小明',
    doc: 'https://goo.gl/1357abc',
  },
  {
    itemName: '開發環境建置',
    priority: '低',
    estStartDate: '2021/02/20',
    estEndDate: '2021/03/01',
    realStartDate: '2021/03/05',
    realEndDate: '2021/02/14',
    isExpanded: false,
    estComplateRate: 100,
    realComplateRate: 100,
    state: 'NOT STARTED',
    principal: '劉小明',
    doc: 'https://goo.gl/1357abc',
  }
  ];


  editItem: FakeItem;

  items = this.catheySys;



  constructor() { }

  syncTable(): void {
    this.items = this.catheySys;
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
    const newFakeData: FakeItem =  { itemName: '',estStartDate : '', estEndDate: '', isExpanded: false};
    this.catheySys.push(newFakeData);
    this.editItem = newFakeData;
  }

  addSubRow(subItem: FakeItem[]): void{
    const newFakeData: FakeItem =  { itemName: '', estStartDate : '', estEndDate: '', isExpanded: false};
    subItem.push(newFakeData);
    this.editItem = newFakeData;
  }

  addSubItem(item: FakeItem): void {
    if (item.subItem) {
      item.isExpanded = true;
    } else {
      item.subItem = [];
      this.addSubRow(item.subItem);
      item.isExpanded = true;
    }

  }
  showData(): any{
    return JSON.stringify(this.items);
  }

  editOtherItemNow(item: FakeItem): boolean {
    if (!this.editItem) {
      return false;
    } else if (this.editItem === item) {
      return false;
    }
    return true;
  }
  setEditItem(item: FakeItem): void {
    this.editItem = item;
  }
  confrimItem(): void {
    this.editItem = null;
  }
}


export interface Fakeata {
  name: string;
  desc: string;
  content?: Fakeata[];
  isExpanded?: boolean;
  p?: string;
}

export interface FakeItem {
  itemName: string;
  priority?: string;
  estStartDate: string;
  estEndDate: string;
  realStartDate?: string;
  realEndDate?: string;
  estComplateRate?: number;
  realComplateRate?: number;
  doc?: string;
  state?: string;
  principal?: string;
  subItem?: FakeItem[];
  isExpanded: boolean;
}
