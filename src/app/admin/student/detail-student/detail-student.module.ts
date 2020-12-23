import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStudentPageRoutingModule } from './detail-student-routing.module';

import { DetailStudentPage } from './detail-student.page';
import { ModalController } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStudentPageRoutingModule,
    ReactiveFormsModule
      ],
  declarations: [DetailStudentPage]
})
export class DetailStudentPageModule {}
