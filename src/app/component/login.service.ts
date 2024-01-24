import { Injectable } from '@angular/core';
import { loginClass } from './login-class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginValue = {
    userName : 'BlindMatrix',
    passWord : '12345'
  }

  loginValidation(loginFormValue:loginClass){
    localStorage.setItem('loginValue', JSON.stringify(this.loginValue));
    const storedLoginValue = JSON.parse(localStorage.getItem('loginValue') || '{}');
    return (
      loginFormValue.userName === storedLoginValue.userName &&
      loginFormValue.password === storedLoginValue.passWord
    );
  }
}
