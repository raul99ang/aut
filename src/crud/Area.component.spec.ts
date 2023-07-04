import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaComponent} from './Area.component';
 
describe('AreaComponent', () => {
  let component: AreaComponent;
  let fixture: ComponentFixture<AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});