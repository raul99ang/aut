import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComponentComponent } from './grafico-component.component';

describe('GraficoComponentComponent', () => {
  let component: GraficoComponentComponent;
  let fixture: ComponentFixture<GraficoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
