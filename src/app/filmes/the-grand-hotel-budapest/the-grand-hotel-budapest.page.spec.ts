import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheGrandHotelBudapestPage } from './the-grand-hotel-budapest.page';

describe('TheGrandHotelBudapestPage', () => {
  let component: TheGrandHotelBudapestPage;
  let fixture: ComponentFixture<TheGrandHotelBudapestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGrandHotelBudapestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheGrandHotelBudapestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
