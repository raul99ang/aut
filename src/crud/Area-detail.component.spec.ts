import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaDetailComponent} from './Area-detail.component';
 
describe('AreaDetailComponent', () => {
  let component: AreaDetailComponent;
  let fixture: ComponentFixture<AreaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});