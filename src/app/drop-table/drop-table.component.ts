import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-table',
  templateUrl: './drop-table.component.html',
  styleUrls: ['./drop-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DropTableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['No', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded(element: PeriodicElement): void {
    element.isExpanded = !element.isExpanded;
  }
  syncTable(): void {
    this.dataSource = ELEMENT_DATA;
  }

  clearTable(): void {
    this.dataSource = [];
  }
  drop(event: CdkDragDrop<string[]>): void {
    console.log(event.container.data);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

export interface PeriodicElement {
  name: string;
  No: number;
  weight: number;
  symbol: string;
  isExpanded: boolean,
  description: string;
  innerData?: PeriodicElement[];
}



const ELEMENT_DATA_T: PeriodicElement[] = [
  {
    No: 1,
    name: '測試資料',
    weight: 9999,
    symbol: 'TEST',
    isExpanded: false,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    No: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    isExpanded: false,
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    No: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    isExpanded: false,
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }
];

const ELEMENT_DATA_R: PeriodicElement[] = [
  {
    No: 1,
    name: '被測試資料',
    weight: 88888,
    symbol: 'TEEST',
    isExpanded: false,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    No: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    isExpanded: false,
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    No: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    isExpanded: false,
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    No: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    isExpanded: false,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    innerData: ELEMENT_DATA_T
  }, {
    No: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    isExpanded: false,
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    innerData: ELEMENT_DATA_R

  }, {
    No: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    isExpanded: false,
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
    innerData: ELEMENT_DATA_T
  }
];
