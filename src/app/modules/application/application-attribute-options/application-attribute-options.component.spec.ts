import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAttributeOptionsComponent } from './application-attribute-options.component';

describe('ApplicationAttributeOptionsComponent', () => {
  let component: ApplicationAttributeOptionsComponent;
  let fixture: ComponentFixture<ApplicationAttributeOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationAttributeOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAttributeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
