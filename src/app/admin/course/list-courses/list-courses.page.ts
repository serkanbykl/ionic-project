import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../inc/interfaces/course';
import { CourseService } from '../../inc/services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.page.html',
  styleUrls: ['./list-courses.page.scss'],
})
export class ListCoursesPage implements OnInit {

  courses$: Observable<Course[]>;
  courses: Course[] = [];


  constructor(private courseservice: CourseService) { }



  ngOnInit() {
    this.courses$ = this.courseservice.getCourses();
    this.courses$.subscribe(result => {
      this.courses = result;
    })


  }


}
