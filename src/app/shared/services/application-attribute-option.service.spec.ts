import { TestBed } from '@angular/core/testing';

import { ApplicationAttributeOptionService } from './application-attribute-option.service';

describe('ApplicationAttributeOptionService', () => {
  let service: ApplicationAttributeOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationAttributeOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
