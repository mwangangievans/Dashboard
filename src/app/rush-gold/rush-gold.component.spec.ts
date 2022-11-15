import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushGoldComponent } from './rush-gold.component';

describe('RushGoldComponent', () => {
  let component: RushGoldComponent;
  let fixture: ComponentFixture<RushGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushGoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
