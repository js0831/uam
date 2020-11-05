import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeOptionsComponent } from './attribute-options.component';

describe('AttributeOptionsComponent', () => {
  let component: AttributeOptionsComponent;
  let fixture: ComponentFixture<AttributeOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
