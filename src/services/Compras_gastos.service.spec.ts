
import { TestBed } from '@angular/core/testing';

import { Compras_gastosService } from './Compras_gastos.service';

describe('Compras_gastosService', () => {
  let service: Compras_gastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Compras_gastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});