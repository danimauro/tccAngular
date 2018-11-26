import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncComponent } from './unc.component';

describe('UncComponent', () => {
  let component: UncComponent;
  let fixture: ComponentFixture<UncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
