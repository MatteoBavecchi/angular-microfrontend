import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  heading?: boolean = false;
  email?: string;
  password?: string;

  constructor(/*private cd: ChangeDetectorRef*/) { }

  ngOnInit(): void {
    window.addEventListener('loginEvent', this.login.bind(this), true);
    console.log("Header:Added event listener");
  }

  login = (event: any) => {
    console.log(event);
    console.log("Header:login function: " + event.detail.action + "-" + event.detail.email + "-" + event.detail.password);
    this.heading = !this.heading;
    this.email = event.detail.email;
    this.password = event.detail.password;
    //this.cd.detectChanges();
  }

  ngOnDestroy() {
    window.removeEventListener('loginEvent', this.login, true);
  }

}
