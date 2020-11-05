import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRoleMaintenanceComponent } from './general-role-maintenance.component';

describe('GeneralRoleMaintenanceComponent', () => {
  let component: GeneralRoleMaintenanceComponent;
  let fixture: ComponentFixture<GeneralRoleMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRoleMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRoleMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
