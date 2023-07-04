import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLavadosComponent } from './registro-lavados.component';

describe('RegistroLavadosComponent', () => {
  let component: RegistroLavadosComponent;
  let fixture: ComponentFixture<RegistroLavadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLavadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLavadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
