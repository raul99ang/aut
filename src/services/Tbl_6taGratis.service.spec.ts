
import { TestBed } from '@angular/core/testing';

import { Tbl_6taGratisService } from './Tbl_6taGratis.service';

describe('Tbl_6taGratisService', () => {
  let service: Tbl_6taGratisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_6taGratisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});