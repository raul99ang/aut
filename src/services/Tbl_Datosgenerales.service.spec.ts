
import { TestBed } from '@angular/core/testing';

import { Tbl_DatosgeneralesService } from './Tbl_Datosgenerales.service';

describe('Tbl_DatosgeneralesService', () => {
  let service: Tbl_DatosgeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_DatosgeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});