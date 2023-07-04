
import { TestBed } from '@angular/core/testing';

import { Tbl_ServiciosService } from './Tbl_Servicios.service';

describe('Tbl_ServiciosService', () => {
  let service: Tbl_ServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_ServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});