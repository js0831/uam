import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProvisioningFormComponent } from './staff-provisioning-form.component';

describe('StaffProvisioningFormComponent', () => {
  let component: StaffProvisioningFormComponent;
  let fixture: ComponentFixture<StaffProvisioningFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProvisioningFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProvisioningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
