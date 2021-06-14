import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'projects/login-app/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input() ch!: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    console.log("Avvio di loginApp");
    this.loginService.setChannelName(this.ch);
    this.router.navigate(['/login/home']);
  }
}
