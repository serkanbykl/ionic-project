import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../inc/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

    invalidLogin:boolean;
    
    username:FormControl;
    password:FormControl;

    errorMessage:string;

    constructor(private fb: FormBuilder, private acc: AccountService, private router: Router,private route: ActivatedRoute) {}

    submitForm() {


            console.log('Valid!');
            let userLogin = this.loginForm.value;
            this.acc.login(userLogin.username, userLogin.password).subscribe(result => {

                let token = (<any>result).token;
                console.log(token);
                console.log(result.userRole);
                console.log("User Logged In Successfully");
                this.invalidLogin = false;
                this.router.navigate(['/home']).then(() => { window.location.reload();});
            }, error => {
                this.invalidLogin = true;
                this.errorMessage = "Please Check the Login Credentials - Invalid Username / Password was entered";
                console.log(this.errorMessage);

            }
            );
        
    }

    ngOnInit() {
        this.username=new FormControl('',[Validators.required]);
        this.password=new FormControl('',[Validators.required]);
        this.loginForm=this.fb.group({
          "username":this.username,
          "password": this.password
        });
    
        
      }
    
    }
