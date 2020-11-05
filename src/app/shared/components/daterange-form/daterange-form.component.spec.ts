import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangeFormComponent } from './daterange-form.component';

describe('DaterangeFormComponent', () => {
  let component: DaterangeFormComponent;
  let fixture: ComponentFixture<DaterangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaterangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaterangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
