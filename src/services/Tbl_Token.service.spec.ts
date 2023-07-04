
import { TestBed } from '@angular/core/testing';

import { Tbl_TokenService } from './Tbl_Token.service';

describe('Tbl_TokenService', () => {
  let service: Tbl_TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});