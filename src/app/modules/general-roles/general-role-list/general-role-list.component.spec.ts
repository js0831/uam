import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRoleListComponent } from './general-role-list.component';

describe('GeneralRoleListComponent', () => {
  let component: GeneralRoleListComponent;
  let fixture: ComponentFixture<GeneralRoleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
