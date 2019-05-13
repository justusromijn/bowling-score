import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollAmountComponent } from './roll-amount.component';

describe('RollAmountComponent', () => {
  let component: RollAmountComponent;
  let fixture: ComponentFixture<RollAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
