import { TestBed, inject } from '@angular/core/testing';

import { BolsaService } from './bolsa.service';

describe('BolsaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolsaService]
    });
  });

  it('should be created', inject([BolsaService], (service: BolsaService) => {
    expect(service).toBeTruthy();
  }));
});
