
import { TestBed } from '@angular/core/testing';

import { Tbl_TipogastoService } from './Tbl_Tipogasto.service';

describe('Tbl_TipogastoService', () => {
  let service: Tbl_TipogastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TipogastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});