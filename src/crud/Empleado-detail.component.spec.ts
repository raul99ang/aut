import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadoDetailComponent} from './Empleado-detail.component';
 
describe('EmpleadoDetailComponent', () => {
  let component: EmpleadoDetailComponent;
  let fixture: ComponentFixture<EmpleadoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});