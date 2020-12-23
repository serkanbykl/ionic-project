import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result } from 'lodash';
import { Observable } from 'rxjs';
import { first, flatMap, map, shareReplay } from 'rxjs/operators';
import { SCourse } from 'src/app/student/inc/interfaces/scourse';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http: HttpClient) { }
private baseUrl: string="http://vionic.azurewebsites.net/api/admin/getstudents"
private getStudentCoursesUrl : string ="http://vionic.azurewebsites.net/api/admin/GetStudentCourses/"
private updateFeesUrl: string="http://vionic.azurewebsites.net/api/admin/updatestudentfees"
private deleteStudentUrl:string="http://vionic.azurewebsites.net/api/admin/deletestudent/"
private getCourseStudentUrl: string="http://vionic.azurewebsites.net/api/admin/getcoursestudents/"

private student$:Observable<Student[]>;


getStudents():Observable<Student[]>{
  this.clearCache();
  this.student$=this.http.get<Student[]>(this.baseUrl);
  
  return this.student$;
}

getStudentById(id:string):Observable<Student>{
  return this.getStudents().pipe(flatMap(result=>result), first(student=>student.id==id));
}

deleteStudent(id:string):Observable<any>{
  return this.http.delete(this.deleteStudentUrl+id);
}

getStudentCourses(id:string):Observable<Student[]>{
  this.student$=this.http.get<Student[]>(this.getStudentCoursesUrl + id);
  
  return this.student$;
}
getCourseStudent(cid:number):Observable<Student[]>{
  this.student$=this.http.get<Student[]>(this.getCourseStudentUrl + cid);
  return this.student$;
}

updateFees(editFees:SCourse):Observable<SCourse>{
  return this.http.put<SCourse>(this.updateFeesUrl, editFees);
}

clearCache(){
  this.student$=null;
  }


}