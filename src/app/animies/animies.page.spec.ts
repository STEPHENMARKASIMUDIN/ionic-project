import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimiesPage } from './animies.page';

describe('AnimiesPage', () => {
  let component: AnimiesPage;
  let fixture: ComponentFixture<AnimiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
