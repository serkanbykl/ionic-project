import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTeacherPageRoutingModule } from './detail-teacher-routing.module';

import { DetailTeacherPage } from './detail-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTeacherPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailTeacherPage]
})
export class DetailTeacherPageModule {}
