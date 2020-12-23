import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, flatMap, shareReplay } from 'rxjs/operators';
import { Course } from '../interfaces/course';
import { Student } from '../interfaces/student';
import { TCourse } from '../interfaces/tcourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

constructor(private http: HttpClient) { }
private baseUrl: string="http://vionic.azurewebsites.net/api/admin/getcourses"
private addCourseUrl : string ="http://vionic.azurewebsites.net/api/admin/addcourse"
private deleteCourseUrl:string="http://vionic.azurewebsites.net/api/admin/deletecourse/"
private updateCourseUrl: string="http://vionic.azurewebsites.net/api/admin/updatecourse/"
private getContentCourseUrl:string="http://vionic.azurewebsites.net/api/admin/getcontentcourse/"
private getCourseStudents:string="http://vionic.azurewebsites.net/api/admin/getcoursestudents/"

private course$:Observable<Course[]>;
private content$:Observable<TCourse[]>;
private student$:Observable<Student[]>;

getCourses():Observable<Course[]>{

  if(!this.course$){
    this.course$=this.http.get<Course[]>(this.baseUrl);
  }
  return this.course$;
}

getCourseById(id:number):Observable<Course>{
return this.getCourses().pipe(flatMap(result=>result), first(course=>course.cid==id));
}

insertCourse(newCourse: Course):Observable<Course>
{
  return this.http.post<Course>(this.addCourseUrl,newCourse);
}


updateCourse(id:number,editCourse:Course):Observable<Course>{
  return this.http.put<Course>(this.updateCourseUrl + id, editCourse);
}

deleteCourse(id:number):Observable<any>{
  return this.http.delete(this.deleteCourseUrl+id);
}

getContentCourse(cid:number):Observable<TCourse[]>{
  this.content$ = this.http.get<TCourse[]>(this.getContentCourseUrl + cid);
  
  return this.content$;
}

getStudentCourses(cid:number):Observable<Student[]>{
  if(!this.student$){
    this.student$=this.http.get<Student[]>(this.getCourseStudents + cid);
  }
  return this.student$;
}


clearCache(){
this.course$=null;
}
}
