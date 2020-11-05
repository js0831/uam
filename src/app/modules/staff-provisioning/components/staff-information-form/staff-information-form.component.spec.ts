import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInformationFormComponent } from './staff-information-form.component';

describe('StaffInformationFormComponent', () => {
  let component: StaffInformationFormComponent;
  let fixture: ComponentFixture<StaffInformationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInformationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
