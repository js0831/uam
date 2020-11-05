import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAssignmentComponent } from './application-assignment.component';

describe('ApplicationAssignmentComponent', () => {
  let component: ApplicationAssignmentComponent;
  let fixture: ComponentFixture<ApplicationAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
