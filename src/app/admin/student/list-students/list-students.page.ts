import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../inc/interfaces/student';
import { StudentService } from '../../inc/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.page.html',
  styleUrls: ['./list-students.page.scss'],
})
export class ListStudentsPage implements OnInit {
  students$:Observable<Student[]>;
  students:Student[]=[];

  constructor(private studentservice:StudentService) { }
  ngOnInit() {
    this.studentservice.clearCache();
    this.students$=this.studentservice.getStudents();
    this.students$.subscribe(result => {
      this.students=result;
    })

  }
  
}

