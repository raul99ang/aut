
import { TestBed } from '@angular/core/testing';

import { Tbl_GeneroService } from './Tbl_Genero.service';

describe('Tbl_GeneroService', () => {
  let service: Tbl_GeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_GeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});