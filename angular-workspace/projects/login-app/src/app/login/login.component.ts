import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(email: string, password: string) {
    const data = {
      action: 'login',
      email: email,
      password: password
    }
    const event = new CustomEvent('loginEvent', { detail: data });
    window.dispatchEvent(event);
  }

}
