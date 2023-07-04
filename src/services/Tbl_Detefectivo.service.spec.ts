
import { TestBed } from '@angular/core/testing';

import { Tbl_DetefectivoService } from './Tbl_Detefectivo.service';

describe('Tbl_DetefectivoService', () => {
  let service: Tbl_DetefectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_DetefectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});