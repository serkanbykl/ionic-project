import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTeacherPage } from './list-teacher.page';

describe('ListTeacherPage', () => {
  let component: ListTeacherPage;
  let fixture: ComponentFixture<ListTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
