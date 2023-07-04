
import { TestBed } from '@angular/core/testing';

import { Tbl_ObsdiaService } from './Tbl_Obsdia.service';

describe('Tbl_ObsdiaService', () => {
  let service: Tbl_ObsdiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_ObsdiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});