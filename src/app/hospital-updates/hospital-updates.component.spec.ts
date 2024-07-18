import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUpdatesComponent } from './hospital-updates.component';

describe('HospitalUpdatesComponent', () => {
  let component: HospitalUpdatesComponent;
  let fixture: ComponentFixture<HospitalUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalUpdatesComponent]
    });
    fixture = TestBed.createComponent(HospitalUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
