
import { TestBed } from '@angular/core/testing';

import { Tbl_PrepagoService } from './Tbl_Prepago.service';

describe('Tbl_PrepagoService', () => {
  let service: Tbl_PrepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_PrepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});