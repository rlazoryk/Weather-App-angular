import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'loginInput': new FormControl(null),
      'passwordInput': new FormControl(null)
    });
  }

  onLogin() {
    console.log(this.loginForm);
    this.router.navigate(['/weather']);
  }
}
