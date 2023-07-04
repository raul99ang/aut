
import { TestBed } from '@angular/core/testing';

import { Tbl_precobroPrepagoService } from './Tbl_precobroPrepago.service';

describe('Tbl_precobroPrepagoService', () => {
  let service: Tbl_precobroPrepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_precobroPrepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});