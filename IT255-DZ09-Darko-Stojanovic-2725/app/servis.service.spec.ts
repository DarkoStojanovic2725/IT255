import { TestBed, inject } from '@angular/core/testing';

import { ServisService } from './servis.service';

describe('ServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServisService]
    });
  });

  it('should ...', inject([ServisService], (service: ServisService) => {
    expect(service).toBeTruthy();
  }));
});
