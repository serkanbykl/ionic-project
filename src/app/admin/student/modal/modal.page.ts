import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Student } from '../../inc/interfaces/student';
import { StudentService } from '../../inc/services/student.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  updateForm:FormGroup;
  feesMessage:string;

  student: Student;
  studentCourses$:Observable<Student[]>;
  studentCourses:Student[]=[];
  id = this.route.snapshot.params['id'];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private fb:FormBuilder,
    private studentservice:StudentService,
    private route: ActivatedRoute
  ) { 

    this.updateForm = fb.group({

      'scid': this.navParams.data.scid,
      'fees':this.navParams.data.fees,
      'sid':this.navParams.data.sid,
      'cid':this.navParams.data.cid
    });
    
  }

  student_Courses(){
    this.studentservice.clearCache();
    this.studentCourses$=this.studentservice.getStudentCourses(this.id);
    this.studentCourses$.subscribe(result => {
      this.studentCourses=result;
    })
  }
  
  onUpdate($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.updateForm.controls) {
      this.updateForm.controls[c].markAsTouched();
    }
    if (this.updateForm.valid) {
      console.log('Valid!');
      let editFees = value;
      this.studentservice.updateFees(editFees).subscribe(result=>{
        this.feesMessage="";
        this.feesMessage="Updated!";
        this.student_Courses();
      },error=>{
        this.feesMessage="";
        this.feesMessage="Error!"
      });

    }
  }



  ngOnInit() {

  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}