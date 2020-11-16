import { TestBed } from '@angular/core/testing';

import { ApplicationAttributeService } from './application-attribute.service';

describe('ApplicationAttributeService', () => {
  let service: ApplicationAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
