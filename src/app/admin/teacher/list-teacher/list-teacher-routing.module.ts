import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTeacherPage } from './list-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: ListTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTeacherPageRoutingModule {}
