import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFieldComponent } from './language-field.component';

describe('LanguageFieldComponent', () => {
  let component: LanguageFieldComponent;
  let fixture: ComponentFixture<LanguageFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
