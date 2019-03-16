import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundarioComponent } from './segundario.component';

describe('SegundarioComponent', () => {
  let component: SegundarioComponent;
  let fixture: ComponentFixture<SegundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
