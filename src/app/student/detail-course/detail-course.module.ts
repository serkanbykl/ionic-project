import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCoursePageRoutingModule } from './detail-course-routing.module';

import { DetailCoursePage } from './detail-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCoursePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailCoursePage]
})
export class DetailCoursePageModule {}
