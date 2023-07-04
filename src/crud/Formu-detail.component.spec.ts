import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormuDetailComponent} from './Formu-detail.component';
 
describe('FormuDetailComponent', () => {
  let component: FormuDetailComponent;
  let fixture: ComponentFixture<FormuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});