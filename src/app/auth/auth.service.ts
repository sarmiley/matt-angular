import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Input()
  tabVal$ = new Subject();

  constructor() {}
  
  getTabVal(str: string) {
    this.tabVal$.next(str);
  }

}
