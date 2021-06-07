import { Component, OnInit } from '@angular/core';
import { LoginService } from 'projects/login-app/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(email: string, password: string) {
    this.loginService.login(email, password);
  }

}
