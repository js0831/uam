import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRolesGroupsComponent } from './general-roles-groups.component';

describe('GeneralRolesGroupsComponent', () => {
  let component: GeneralRolesGroupsComponent;
  let fixture: ComponentFixture<GeneralRolesGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRolesGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRolesGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
