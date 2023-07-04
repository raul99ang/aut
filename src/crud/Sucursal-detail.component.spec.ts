import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SucursalDetailComponent} from './Sucursal-detail.component';
 
describe('SucursalDetailComponent', () => {
  let component: SucursalDetailComponent;
  let fixture: ComponentFixture<SucursalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});