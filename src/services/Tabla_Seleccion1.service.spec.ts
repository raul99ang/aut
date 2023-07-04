
import { TestBed } from '@angular/core/testing';

import { Tabla_Seleccion1Service } from './Tabla_Seleccion1.service';

describe('Tabla_Seleccion1Service', () => {
  let service: Tabla_Seleccion1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tabla_Seleccion1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});