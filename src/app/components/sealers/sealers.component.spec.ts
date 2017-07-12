import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SealersComponent } from './sealers.component';

describe('SealersComponent', () => {
  let component: SealersComponent;
  let fixture: ComponentFixture<SealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
