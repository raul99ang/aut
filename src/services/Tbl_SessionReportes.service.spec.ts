
import { TestBed } from '@angular/core/testing';

import { Tbl_SessionReportesService } from './Tbl_SessionReportes.service';

describe('Tbl_SessionReportesService', () => {
  let service: Tbl_SessionReportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_SessionReportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});