
import { TestBed } from '@angular/core/testing';

import { PromocionesService } from './Promociones.service';

describe('PromocionesService', () => {
  let service: PromocionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});