
import { TestBed } from '@angular/core/testing';

import { AdicionalesService } from './Adicionales.service';

describe('AdicionalesService', () => {
  let service: AdicionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});