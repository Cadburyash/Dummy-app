import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  submitted = false;

  constructor(private lg: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginform = this.lg.group({

      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$")]]

    })
  }

  onSubmit() {
    this.submitted = true;


    if (this.loginform.invalid) {
      return;
    }
    console.log(this.submitted)

    this.router.navigateByUrl('dashboard')
  }


  get username() {
    return this.loginform.get('username');
  }

  get password() {
    return this.loginform.get('password');
  }

}
