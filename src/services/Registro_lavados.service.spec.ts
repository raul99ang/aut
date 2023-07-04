
import { TestBed } from '@angular/core/testing';

import { Registro_lavadosService } from './Registro_lavados.service';

describe('Registro_lavadosService', () => {
  let service: Registro_lavadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registro_lavadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});