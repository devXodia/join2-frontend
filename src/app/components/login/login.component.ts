import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  checkbox: boolean = true;
  email: string = '';
  pwd: string = '';

  ngOnInit() {
    this.getLocalStorageInfo();
  }

  changeCheckbox() {
    this.checkbox = !this.checkbox;

    if (this.checkbox) {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.pwd);
    }
  }

  getLocalStorageInfo() {
    if (typeof localStorage !== 'undefined') {
      let email = localStorage.getItem('email');
      let password = localStorage.getItem('password');
      if (email && password) {
        this.email = email;
        this.pwd = password;
      }
    } else {
      console.error('localStorage is not available in this environment.');
    }
  }
}
