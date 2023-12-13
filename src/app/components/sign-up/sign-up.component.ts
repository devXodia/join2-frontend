import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  checkbox: boolean = true;
  email: string = '';
  pwd: string = '';
  confirmPwd: string = '';
  name: string = '';

  changeCheckbox() {
    this.checkbox = !this.checkbox;
  }
}
