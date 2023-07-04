
import { TestBed } from '@angular/core/testing';

import { Tbl_MotivoCancelacionService } from './Tbl_MotivoCancelacion.service';

describe('Tbl_MotivoCancelacionService', () => {
  let service: Tbl_MotivoCancelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_MotivoCancelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});