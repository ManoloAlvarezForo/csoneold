import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SealerComponent } from './sealer.component';

describe('SealerComponent', () => {
  let component: SealerComponent;
  let fixture: ComponentFixture<SealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
