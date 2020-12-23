import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

constructor(private acc:AccountService,
  private router: Router) { }


canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{

  return this.acc.isLoggedIn.pipe(take(1),map((loginStatus : boolean)=>{
   const destination : string = state.url;
   const id =  route.params.id;
    switch (destination) {
        case "/login": {
            if (!loginStatus) {
                return true;
            }
            else {
                this.router.navigate(['/home']);
            }
        }
        case "/register": {
            if (!loginStatus) {
                return true;
            }
            else {
                this.router.navigate(['/home']);
            }
        }
        case "/student/courses":
        case '/student/course/' + id:
        case "/student/my-courses":
        case '/student/course/content/' + id:
            {
                if (localStorage.getItem("userRole") === "Student") {
                    return true;
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
        case "/teacher/my-courses":
            {
                if (localStorage.getItem("userRole") === "Teacher") {
                    return true;
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
        case "/admin/list-teacher":
        case "/admin/add-teacher":
        case '/admin/teacher/' + id:
        case "/admin/list-courses":
        case "/admin/add-course":
        case '/admin/course/' + id:
        case "/admin/list-students":
        case '/admin/student/' + id:
        case "/modal":
            {
                if (localStorage.getItem("userRole") === "Admin") {
                    return true;
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
        default:
            return false;
    }
}));

}
}