import { TestBed } from '@angular/core/testing';

import { RegistrarClientesService } from './registrar-clientes.service';

describe('RegistrarClientesService', () => {
  let service: RegistrarClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
