
import { TestBed } from '@angular/core/testing';

import { Tabla_Seleccion3Service } from './Tabla_Seleccion3.service';

describe('Tabla_Seleccion3Service', () => {
  let service: Tabla_Seleccion3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tabla_Seleccion3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});