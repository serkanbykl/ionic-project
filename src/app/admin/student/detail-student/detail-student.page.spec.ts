import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailStudentPage } from './detail-student.page';

describe('DetailStudentPage', () => {
  let component: DetailStudentPage;
  let fixture: ComponentFixture<DetailStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
