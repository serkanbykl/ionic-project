import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTeacherPage } from './detail-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTeacherPageRoutingModule {}
