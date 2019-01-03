import { TestBed } from '@angular/core/testing';

import { HmgroupService } from './hmgroup.service';

describe('HmgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmgroupService = TestBed.get(HmgroupService);
    expect(service).toBeTruthy();
  });
});
