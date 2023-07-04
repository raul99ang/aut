
import { TestBed } from '@angular/core/testing';

import { Tbl_SessionService } from './Tbl_Session.service';

describe('Tbl_SessionService', () => {
  let service: Tbl_SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});