import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './inc/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate : [AuthGuardService] 
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'student/courses',
    loadChildren: () => import('./student/courses/courses.module').then( m => m.CoursesPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'student/course/:id',
    loadChildren: () => import('./student/detail-course/detail-course.module').then( m => m.DetailCoursePageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'student/course/content/:cid',
    loadChildren: () => import('./student/content-course/content-course.module').then( m => m.ContentCoursePageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'student/my-courses',
    loadChildren: () => import('./student/my-courses/my-courses.module').then( m => m.MyCoursesPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/add-course',
    loadChildren: () => import('./admin/course/add-course/add-course.module').then( m => m.AddCoursePageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/list-courses',
    loadChildren: () => import('./admin/course/list-courses/list-courses.module').then( m => m.ListCoursesPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/course/:id',
    loadChildren: () => import('./admin/course/detail-course/detail-course.module').then( m => m.DetailCoursePageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/list-students',
    loadChildren: () => import('./admin/student/list-students/list-students.module').then( m => m.ListStudentsPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/student/:id',
    loadChildren: () => import('./admin/student/detail-student/detail-student.module').then( m => m.DetailStudentPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'modal',
    loadChildren: () => import('./admin/student/modal/modal.module').then( m => m.ModalPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/add-teacher',
    loadChildren: () => import('./admin/teacher/add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/list-teacher',
    loadChildren: () => import('./admin/teacher/list-teacher/list-teacher.module').then( m => m.ListTeacherPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'admin/teacher/:id',
    loadChildren: () => import('./admin/teacher/detail-teacher/detail-teacher.module').then( m => m.DetailTeacherPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'teacher/my-courses',
    loadChildren: () => import('./teacher/my-courses/my-courses.module').then( m => m.MyCoursesPageModule), canActivate : [AuthGuardService]
  },
  {
    path: 'teacher/my-course/:cid',
    loadChildren: () => import('./teacher/add-content/add-content.module').then( m => m.AddContentPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
