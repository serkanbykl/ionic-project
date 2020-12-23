import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTeacherPageRoutingModule } from './list-teacher-routing.module';

import { ListTeacherPage } from './list-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTeacherPageRoutingModule
  ],
  declarations: [ListTeacherPage]
})
export class ListTeacherPageModule {}
