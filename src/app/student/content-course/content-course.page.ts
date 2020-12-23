import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../inc/services/course.service';

@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.page.html',
  styleUrls: ['./content-course.page.scss'],
})
export class ContentCoursePage implements OnInit {
  cid = this.route.snapshot.params['cid'];
  contents:any;
  message:string;
  constructor(private courseservice: CourseService,private route: ActivatedRoute) { 
    
  }


    

  ngOnInit()  {

    this.courseservice.clearCache();
    this.courseservice.getContent(localStorage.id,this.cid).subscribe(res=>{
      this.contents=res
    },
    err=>{
      this.message="Content Not Found."
      this.contents="";
    });
  }


}
