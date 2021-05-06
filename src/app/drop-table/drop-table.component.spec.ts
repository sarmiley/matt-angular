import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTableComponent } from './drop-table.component';

describe('DropTableComponent', () => {
  let component: DropTableComponent;
  let fixture: ComponentFixture<DropTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
