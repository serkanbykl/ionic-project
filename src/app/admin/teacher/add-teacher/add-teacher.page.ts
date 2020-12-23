import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../inc/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {


  insertForm: FormGroup;
  passwordForm: FormGroup;

  constructor(fb: FormBuilder, private teacherservice:TeacherService, private router:Router) {

      let username = new FormControl('', [Validators.required, Validators.minLength(2)])

      let password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]));

      let name = new FormControl('', [Validators.required, Validators.minLength(2)])

      let educationDetail = new FormControl(null)
      let personalDetail = new FormControl(null)



      this.insertForm = fb.group({
          'username':username,
          'password': password,
          'name':name,
          'educationDetail':educationDetail,
          'personalDetail':personalDetail

      });
  }
  errorList:string[]=[];
  message:string;

  submitForm($ev, value: any) {



      $ev.preventDefault();


      if (this.insertForm.valid) {
          console.log('Valid!');
          let userDetails = value;
          this.teacherservice.register(userDetails.username,userDetails.password,userDetails.educationDetail,userDetails.personalDetail,userDetails.name).subscribe(result=>{
              this.message="";
              this.errorList=[];
              this.message="Registered Successfully."
              this.insertForm.reset();
          },error=> {
              this.errorList=[];
              this.message="";
          for(var i = 0; i < error.error.value.length; i++) 
          {
            this.errorList.push(error.error.value[i]);
            console.log(error.error.value[i]);
          }
          console.log("Sorry.. Can't Register.")
          });
      }
  }

  ngOnInit() {
  }

}