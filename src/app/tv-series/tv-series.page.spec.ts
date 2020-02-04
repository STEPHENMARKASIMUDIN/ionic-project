import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvSeriesPage } from './tv-series.page';

describe('TvSeriesPage', () => {
  let component: TvSeriesPage;
  let fixture: ComponentFixture<TvSeriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
