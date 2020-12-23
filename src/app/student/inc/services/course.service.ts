import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { Course } from '../interfaces/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) { }
    private baseUrl: string = "http://vionic.azurewebsites.net/api/student/getcourses"
    private registerCourseUrl: string = "http://vionic.azurewebsites.net/api/student/registercourse"
    private getRegCourseUrl: string = "http://vionic.azurewebsites.net/api/student/getregcourses/"
    private getCourseContentUrl: string = "http://vionic.azurewebsites.net/api/student/getcontentcourse/"


    private course$: Observable<Course[]>;


    getCourses(): Observable<Course[]> {

        if (!this.course$) {
            this.course$ = this.http.get<Course[]>(this.baseUrl);
        }
        return this.course$;
    }

    getCourseById(id: number): Observable<Course> {
        return this.getCourses().pipe(flatMap(result => result), first(course => course.cid == id));
    }

    getRegCourses(id: string): Observable<Course[]> {
        if (!this.course$) {
            this.course$ = this.http.get<Course[]>(this.getRegCourseUrl + id);
        }
        return this.course$;
    }

    regCourse(newReg: Course): Observable<Course> {
        return this.http.post<Course>(this.registerCourseUrl, newReg);
    }

    getContent(id: string, cid: number) {
        return this.http.get<any>(this.getCourseContentUrl + id + '/' + cid);
    }


    clearCache() {
        this.course$ = null;
    }
}
