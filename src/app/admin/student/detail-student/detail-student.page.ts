import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../inc/interfaces/student';
import { StudentService } from '../../inc/services/student.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.page.html',
  styleUrls: ['./detail-student.page.scss'],
})
export class DetailStudentPage implements OnInit {

  dataReturned: any;



  student: Student;
  studentCourses$:Observable<Student[]>;
  studentCourses:Student[]=[];

  id = this.route.snapshot.params['id'];
  sid:any;
  deleteForm: FormGroup;
  delMessage:string;
  feesMessage:string;
  constructor(private studentservice: StudentService, private route: ActivatedRoute,private fb:FormBuilder, 
    private modalcontroller:ModalController) {

    let check = new FormControl(false, Validators.requiredTrue);

    this.studentservice.getStudentById(this.id.toString()).subscribe(result => {
      this.student=result;
      this.sid=this.student.id
    });


    this.deleteForm = fb.group({

      'check': check
    });




  }


  async openModal(scid:number,cid:number,feesStudent:number) {
    const modal = await this.modalcontroller.create({
      component: ModalPage,
      componentProps: {
        "scid": scid,
        "cid":cid,
        "sid": this.id.toString(),
        "fees":feesStudent
            }
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.student_Courses();
    });

    return await modal.present();
  }

  student_Courses(){
    this.studentservice.clearCache();
    this.studentCourses$=this.studentservice.getStudentCourses(this.id.toString());
    this.studentCourses$.subscribe(result => {
      this.studentCourses=result;
    })
  }
  deleteStudent(id:string){
    this.studentservice.deleteStudent(this.id.toString()).subscribe(result=>{
      this.delMessage="";
      this.delMessage="Student Deleted."
    },error=>{
      this.delMessage="";
      this.delMessage="Error. Please Try Again."
    })
  }
  ngOnInit() {
  this.student_Courses()


    
  }



}

