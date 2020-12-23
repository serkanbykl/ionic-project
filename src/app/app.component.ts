import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AccountService } from './inc/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  appPages: any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private acc: AccountService
  ) {
    this.initializeApp();

    if (!acc.checkLoginStatus()) {
      this.appPages = [
        {
          title: 'Login',
          url: '/login',
          icon: 'person'
        },
        {
          title: 'Register',
          url: '/register',
          icon: 'person-add'
        },
      ];
    }

    else {
      if (localStorage.getItem("userRole") === "Student") {
        this.appPages = [
          {
            title: 'Courses',
            url: 'student/courses',
            icon: 'book'
          },
          {
            title: 'My Courses',
            url: 'student/my-courses',
            icon: 'bookmarks'
          }
        ];
      }

      if (localStorage.getItem("userRole") === "Teacher") {
        this.appPages = [
          {
            title: 'My Courses',
            url: 'teacher/my-courses',
            icon: 'bookmarks'
          }
        ];
      }


      if (localStorage.getItem("userRole") === "Admin") {
        this.appPages = [
          {
            title: 'Add Course',
            url: 'admin/add-course',
            icon: 'add'
          },
          {
            title: 'Course List',
            url: 'admin/list-courses',
            icon: 'book'
          },
          {
            title: 'Student List',
            url: 'admin/list-students',
            icon: 'people'
          },
          {
            title: 'Add Teacher',
            url: 'admin/add-teacher',
            icon: 'person-add'
          },
          {
            title: 'Teacher List',
            url: 'admin/list-teacher',
            icon: 'people'
          }
        ];
      }


    }


  }

  loginStatus$:Observable<boolean>;
  username$:Observable<string>;
  userRole$:Observable<string>;
  

  onLogOut() {
    this.acc.logOut();
    window.location.reload();
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

    });
  }

  ngOnInit() {
    this.loginStatus$ = this.acc.isLoggedIn;
    this.username$ = this.acc.currentUserName;
    this.userRole$ = this.acc.currentUserRole;

  }
}
