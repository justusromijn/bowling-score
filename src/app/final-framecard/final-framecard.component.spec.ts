import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFramecardComponent } from './final-framecard.component';

describe('FinalFramecardComponent', () => {
  let component: FinalFramecardComponent;
  let fixture: ComponentFixture<FinalFramecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalFramecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalFramecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
