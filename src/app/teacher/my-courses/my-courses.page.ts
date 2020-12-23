import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../inc/interfaces/course';
import { CourseService } from '../inc/services/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {

 

courses$:Observable<Course[]>;
courses:Course[];

  constructor(private courseservice:CourseService) { }
  ngOnInit() {
    this.courseservice.clearCache();
    this.courses$=this.courseservice.getMyCourses(localStorage.id);
    this.courses$.subscribe(result => {
      this.courses=result;
    })
  }

}
