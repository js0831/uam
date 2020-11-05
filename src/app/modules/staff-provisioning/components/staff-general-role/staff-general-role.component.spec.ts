import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGeneralRoleComponent } from './staff-general-role.component';

describe('StaffGeneralRoleComponent', () => {
  let component: StaffGeneralRoleComponent;
  let fixture: ComponentFixture<StaffGeneralRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffGeneralRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffGeneralRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
