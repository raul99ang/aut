
import { TestBed } from '@angular/core/testing';

import { GastosComprasService } from './Gastos_compras.service';

describe('FormuService', () => {
  let service: GastosComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});