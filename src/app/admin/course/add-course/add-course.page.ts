import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from '../../inc/interfaces/course';
import { Teacher } from '../../inc/interfaces/teacher';
import { CourseService } from '../../inc/services/course.service';
import { TeacherService } from '../../inc/services/teacher.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  insertForm: FormGroup;


  courses$: Observable<Course[]>;
  courses: Course[] = [];
  teachers$: Observable<Teacher[]>;
  teachers: Teacher[] = [];
  message: string;
  constructor(private courseservice: CourseService, private teacherservice: TeacherService, private fb: FormBuilder) {

    let tid = new FormControl('', [Validators.required]);
    let cName = new FormControl('', [Validators.required]);
    let fees = new FormControl('', [Validators.required]);
    let duration = new FormControl('', [Validators.required]);

    this.insertForm = fb.group({
      'tid': tid,
      'cName': cName,
      'fees': fees,
      'duration': duration
    });
  }
  submitForm() {

    
    let newCourse = this.insertForm.value;
    console.log(newCourse);
    this.courseservice.insertCourse(newCourse).subscribe(
      result => {
        this.courseservice.clearCache();
        this.courses$ = this.courseservice.getCourses();

        this.courses$.subscribe(newlist => {
          this.courses = newlist;
          this.insertForm.reset();
          this.message = "";
          this.message = "New Course Added."
        });

      },
      error => {

        this.message = "";
        this.message = "Could not add course."

      })

  }

  ngOnInit() {
    this.teachers$ = this.teacherservice.getTeachers();
    this.teachers$.subscribe(result => {
      this.teachers = result;
    })



  }

}
