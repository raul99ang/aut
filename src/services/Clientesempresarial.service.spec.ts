
import { TestBed } from '@angular/core/testing';

import { ClientesempresarialService } from './Clientesempresarial.service';

describe('ClientesempresarialService', () => {
  let service: ClientesempresarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesempresarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});