import { TestBed } from '@angular/core/testing';

import { WashService } from './Lavados.service';
describe('FormuService', () => {
  let service: WashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});