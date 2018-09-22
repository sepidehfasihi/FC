
import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Authentication} from './Authentication';
import {LoginService} from './LoginService';
import {LoginEntity} from './Login';
import {Router} from '@angular/router';
import {AuthHttp, AuthConfig, JwtHelper} from 'angular2-jwt';
import {Alert} from "selenium-webdriver";
import { NgZone } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService],
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  jwthelper: JwtHelper;
  constructor(fb: FormBuilder, private api: LoginService, private router: Router, private ngZone: NgZone
  ) {
    this.jwthelper = new JwtHelper();
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      const loginRequest = new LoginEntity(this.email.value, this.password.value);
      this.api.Authenticate(loginRequest).subscribe(res => {
        const auth = res as Authentication;
        var roles:string = res.roles;
        roles = roles.replace("[\"", "");
        roles = roles.replace("\"]", "");
        roles = roles.replace(/['"]+/g, "");
        auth.roles = roles.split(',');
        const token = localStorage.setItem('Authentication', JSON.stringify(auth));
        // this.router.navigateByUrl('/home ');
        this.ngZone.run(() => this.router.navigateByUrl('/home'));

      },error2 => {



        alert("Username or password is incorrect!");
      });

    }
  }
}
