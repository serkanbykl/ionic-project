import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../inc/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;

    constructor(fb: FormBuilder, private acc: AccountService, private router: Router) {

        let username = new FormControl('', [Validators.required, Validators.minLength(2)])

        let password = new FormControl('', [Validators.required, Validators.minLength(2)]);
        //        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        let name = new FormControl('', [Validators.required, Validators.minLength(2)])

        let educationDetail = new FormControl('')
        let personalDetail = new FormControl('')




        this.valForm = fb.group({
            //     'accountagreed': [null, Validators.required],
            'username': username,
            'password': password,
            'name': name,
            'educationDetail': educationDetail,
            'personalDetail': personalDetail

        });
    }
    errorList: string[] = [];
    message: string;

    submitForm(value: any) {

        if (this.valForm.valid) {
            console.log('Valid!');
            let userDetails = value;
            this.acc.register(userDetails.username, userDetails.password, userDetails.name, userDetails.educationDetail, userDetails.personalDetail).subscribe(result => {
                this.message = "";
                this.errorList = [];
                this.message = "Registered Successfully."
                this.valForm.reset();
                this.router.navigate(['/login']);
            }, error => {
                this.errorList = [];
                this.message = "";
                for (var i = 0; i < error.error.value.length; i++) {
                    this.errorList.push(error.error.value[i]);
                    console.log(error.error.value[i]);
                }
                console.log("Sorry.. Can't Register.")
            });
        }
    }

    ngOnInit() {
    }

}