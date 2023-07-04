import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRhComponent } from './control-rh.component';

describe('ControlRhComponent', () => {
  let component: ControlRhComponent;
  let fixture: ComponentFixture<ControlRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
