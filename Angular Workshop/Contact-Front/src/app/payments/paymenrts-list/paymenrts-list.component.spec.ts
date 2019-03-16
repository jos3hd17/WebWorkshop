import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenrtsListComponent } from './paymenrts-list.component';

describe('PaymenrtsListComponent', () => {
  let component: PaymenrtsListComponent;
  let fixture: ComponentFixture<PaymenrtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenrtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenrtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
