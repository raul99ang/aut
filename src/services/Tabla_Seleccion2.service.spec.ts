
import { TestBed } from '@angular/core/testing';

import { Tabla_Seleccion2Service } from './Tabla_Seleccion2.service';

describe('Tabla_Seleccion2Service', () => {
  let service: Tabla_Seleccion2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tabla_Seleccion2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});