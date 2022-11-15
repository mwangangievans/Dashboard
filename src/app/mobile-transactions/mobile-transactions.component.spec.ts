import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTransactionsComponent } from './mobile-transactions.component';

describe('MobileTransactionsComponent', () => {
  let component: MobileTransactionsComponent;
  let fixture: ComponentFixture<MobileTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
