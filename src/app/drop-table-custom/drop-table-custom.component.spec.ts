import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTableCustomComponent } from './drop-table-custom.component';

describe('DropTableCustomComponent', () => {
  let component: DropTableCustomComponent;
  let fixture: ComponentFixture<DropTableCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropTableCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropTableCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
