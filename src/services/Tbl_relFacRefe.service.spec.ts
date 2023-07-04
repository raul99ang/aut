
import { TestBed } from '@angular/core/testing';

import { Tbl_relFacRefeService } from './Tbl_relFacRefe.service';

describe('Tbl_relFacRefeService', () => {
  let service: Tbl_relFacRefeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_relFacRefeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});