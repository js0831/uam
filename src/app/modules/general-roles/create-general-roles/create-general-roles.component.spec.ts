import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneralRolesComponent } from './create-general-roles.component';

describe('CreateGeneralRolesComponent', () => {
  let component: CreateGeneralRolesComponent;
  let fixture: ComponentFixture<CreateGeneralRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeneralRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeneralRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
