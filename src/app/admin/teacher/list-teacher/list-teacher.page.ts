import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../inc/interfaces/teacher';
import { TeacherService } from '../../inc/services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.page.html',
  styleUrls: ['./list-teacher.page.scss'],
})
export class ListTeacherPage implements OnInit {

  teachers$:Observable<Teacher[]>;
  teachers:Teacher[]=[];
  constructor(private teacherservice:TeacherService) { }
  ngOnInit() {
    this.teachers$=this.teacherservice.getTeachers();
    this.teachers$.subscribe(result => {
      this.teachers=result;
    })

  }
  
}

