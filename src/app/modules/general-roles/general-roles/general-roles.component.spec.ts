import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRolesComponent } from './general-roles.component';

describe('GeneralRolesComponent', () => {
  let component: GeneralRolesComponent;
  let fixture: ComponentFixture<GeneralRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
