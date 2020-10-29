import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralRolesComponent } from './edit-general-roles.component';

describe('EditGeneralRolesComponent', () => {
  let component: EditGeneralRolesComponent;
  let fixture: ComponentFixture<EditGeneralRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
