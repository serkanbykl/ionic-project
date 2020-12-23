import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTeacherPage } from './detail-teacher.page';

describe('DetailTeacherPage', () => {
  let component: DetailTeacherPage;
  let fixture: ComponentFixture<DetailTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
