import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { loginClass } from '../login-class';
import { map, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.loginFormBuild()
  }

  loginFormBuild() {
    this.loginForm = this.formBuilder.group({
      userName: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required])
    });
  }
  login() {
    if (this.loginForm.invalid) return;
    const formValue: loginClass = this.loginForm?.value
    of(this.loginService.loginValidation(formValue)).pipe(map((loginStatus: boolean) => {
      if (loginStatus) {
        this.snackBar.open('Login Success', 'Woww!!!', { duration: 3000 })
        this.router?.navigate(['dashboard'])
      } else {
        this.snackBar.open('Login Failed', 'Sorry!!!', { duration: 3000 })
      }
    })).subscribe()
  }
}
