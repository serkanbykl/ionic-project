import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailStudentPage } from './detail-student.page';

const routes: Routes = [
  {
    path: '',
    component: DetailStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailStudentPageRoutingModule {}
