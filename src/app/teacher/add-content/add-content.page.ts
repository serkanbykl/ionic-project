import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TCourse } from '../inc/interfaces/tcourse';
import { CourseService } from '../inc/services/course.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.page.html',
  styleUrls: ['./add-content.page.scss'],
})
export class AddContentPage implements OnInit {
  insertForm: FormGroup;

  cid = this.route.snapshot.params['cid'];
  contents:TCourse[]=[];
  message:string;

  constructor(private courseservice: CourseService,private route: ActivatedRoute,private fb: FormBuilder) { 
    let tid = new FormControl(localStorage.id, [Validators.required]);
    let cid = new FormControl(this.cid, [Validators.required]);
    let content = new FormControl('', [Validators.required]);

    this.insertForm = fb.group({
      'tid': tid,
      'cid': cid,
      'content': content
    });
  }

  submitForm() {


    let newContent = this.insertForm.value;
    newContent.id=this.cid;
    newContent.tid=localStorage.id;
    this.courseservice.addContent(newContent).subscribe(
      result => {

          this.message = "New Content Added."
        
        this.getContent();
      },error => {

        this.message = "Could Not Add Content."

      })

  }

  deleteContent(tcid:number){
    this.courseservice.deleteContent(localStorage.id, tcid).subscribe(res=>{
      this.message="Content Deleted";
      this.courseservice.getContentCourse(localStorage.id, this.cid).subscribe(res=>{
        this.contents=res;
      },
      err=>{
        this.contents=[];
        console.log("Content Error!")
      });
    },err=>{
      this.message="Could Not Delete Content.";

    })
  }

  getContent(){
    this.courseservice.clearCache();
    this.courseservice.getContentCourse(localStorage.id, this.cid).subscribe(res=>{
      this.contents=res;
    },
    err=>{
      this.contents=[];
      console.log("Content Error!")
    });
  }
    

  ngOnInit()  {

   this.getContent();

  }


}
