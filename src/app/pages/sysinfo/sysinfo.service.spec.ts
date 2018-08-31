import { TestBed, inject } from '@angular/core/testing';

import { SysinfoService } from './sysinfo.service';

describe('SysinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysinfoService]
    });
  });

  it('should be created', inject([SysinfoService], (service: SysinfoService) => {
    expect(service).toBeTruthy();
  }));
});
