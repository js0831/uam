import { TestBed } from '@angular/core/testing';

import { AttributeAssignmentService } from './attribute-assignment.service';

describe('AttributeAssignmentService', () => {
  let service: AttributeAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
