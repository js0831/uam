import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProvisioningListComponent } from './staff-provisioning-list.component';

describe('StaffProvisioningListComponent', () => {
  let component: StaffProvisioningListComponent;
  let fixture: ComponentFixture<StaffProvisioningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProvisioningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProvisioningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
