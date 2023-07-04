import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaContableComponent } from './sistema-contable.component';

describe('SistemaContableComponent', () => {
  let component: SistemaContableComponent;
  let fixture: ComponentFixture<SistemaContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaContableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
