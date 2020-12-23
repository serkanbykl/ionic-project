import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentCoursePage } from './content-course.page';

describe('ContentCoursePage', () => {
  let component: ContentCoursePage;
  let fixture: ComponentFixture<ContentCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
