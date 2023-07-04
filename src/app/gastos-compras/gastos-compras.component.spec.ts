import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosComprasComponent } from './gastos-compras.component';

describe('GastosComprasComponent', () => {
  let component: GastosComprasComponent;
  let fixture: ComponentFixture<GastosComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
