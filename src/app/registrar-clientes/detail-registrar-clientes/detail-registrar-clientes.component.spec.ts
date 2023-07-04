import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRegistrarClientesComponent } from './detail-registrar-clientes.component';

describe('DetailRegistrarClientesComponent', () => {
  let component: DetailRegistrarClientesComponent;
  let fixture: ComponentFixture<DetailRegistrarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRegistrarClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRegistrarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
