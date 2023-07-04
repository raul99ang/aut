
import { TestBed } from '@angular/core/testing';

import { SistemaContableService } from './SistemaContable.service';

describe('SistemaContableService', () => {
  let service: SistemaContableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaContableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});