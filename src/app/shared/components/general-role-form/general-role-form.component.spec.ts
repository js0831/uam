import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRoleFormComponent } from './general-role-form.component';

describe('GeneralRoleFormComponent', () => {
  let component: GeneralRoleFormComponent;
  let fixture: ComponentFixture<GeneralRoleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRoleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
