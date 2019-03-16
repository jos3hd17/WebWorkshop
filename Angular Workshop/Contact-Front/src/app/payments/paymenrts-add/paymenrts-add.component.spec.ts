import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenrtsAddComponent } from './paymenrts-add.component';

describe('PaymenrtsAddComponent', () => {
  let component: PaymenrtsAddComponent;
  let fixture: ComponentFixture<PaymenrtsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenrtsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenrtsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
