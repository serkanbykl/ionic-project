import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCoursesPage } from './list-courses.page';

describe('ListCoursesPage', () => {
  let component: ListCoursesPage;
  let fixture: ComponentFixture<ListCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
