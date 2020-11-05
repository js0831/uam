import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedApplicationsAttributesComponent } from './assigned-applications-attributes.component';

describe('AssignedApplicationsAttributesComponent', () => {
  let component: AssignedApplicationsAttributesComponent;
  let fixture: ComponentFixture<AssignedApplicationsAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedApplicationsAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedApplicationsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
