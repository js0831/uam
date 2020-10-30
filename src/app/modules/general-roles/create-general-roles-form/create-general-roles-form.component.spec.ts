import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneralRolesFormComponent } from './create-general-roles-form.component';

describe('CreateGeneralRolesFormComponent', () => {
  let component: CreateGeneralRolesFormComponent;
  let fixture: ComponentFixture<CreateGeneralRolesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeneralRolesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeneralRolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
