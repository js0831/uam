import { TestBed } from '@angular/core/testing';

import { BusinessJobRoleService } from './business-job-role.service';

describe('BusinessJobRoleService', () => {
  let service: BusinessJobRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessJobRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
