import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedGeneralRoleAttributesComponent } from './assigned-general-role-attributes.component';

describe('AssignedGeneralRoleAttributesComponent', () => {
  let component: AssignedGeneralRoleAttributesComponent;
  let fixture: ComponentFixture<AssignedGeneralRoleAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedGeneralRoleAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedGeneralRoleAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
