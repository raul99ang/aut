
import { TestBed } from '@angular/core/testing';

import { Tbl_EstadoCivilService } from './Tbl_EstadoCivil.service';

describe('Tbl_EstadoCivilService', () => {
  let service: Tbl_EstadoCivilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_EstadoCivilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});