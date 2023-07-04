
import { TestBed } from '@angular/core/testing';

import { Tbl_RelfacturacliPrepagoService } from './Tbl_RelfacturacliPrepago.service';

describe('Tbl_RelfacturacliPrepagoService', () => {
  let service: Tbl_RelfacturacliPrepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_RelfacturacliPrepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});