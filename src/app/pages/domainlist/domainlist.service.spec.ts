import { TestBed, inject } from '@angular/core/testing';

import { DomainlistService } from './domainlist.service';

describe('DomainlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainlistService]
    });
  });

  it('should be created', inject([DomainlistService], (service: DomainlistService) => {
    expect(service).toBeTruthy();
  }));
});
