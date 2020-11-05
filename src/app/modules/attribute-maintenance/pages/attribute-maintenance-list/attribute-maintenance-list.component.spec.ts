import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeMaintenanceListComponent } from './attribute-maintenance-list.component';

describe('AttributeMaintenanceListComponent', () => {
  let component: AttributeMaintenanceListComponent;
  let fixture: ComponentFixture<AttributeMaintenanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeMaintenanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeMaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
