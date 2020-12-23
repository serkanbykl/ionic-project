import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../inc/interfaces/course';
import { CourseService } from '../inc/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  
courses$:Observable<Course[]>;
courses:Course[];



constructor(private courseservice:CourseService) { }
ngOnInit() {
  this.courseservice.clearCache();
  this.courses$=this.courseservice.getCourses();
  this.courses$.subscribe(result => {
    this.courses=result;
  })
}
}
