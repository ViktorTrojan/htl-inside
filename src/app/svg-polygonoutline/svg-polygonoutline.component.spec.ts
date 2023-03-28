import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvgPolygonoutlineComponent } from './svg-polygonoutline.component';

describe('SvgPolygonoutlineComponent', () => {
  let component: SvgPolygonoutlineComponent;
  let fixture: ComponentFixture<SvgPolygonoutlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgPolygonoutlineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvgPolygonoutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
