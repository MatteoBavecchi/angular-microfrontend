import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  heading?: boolean = false;
  email?: string;
  password?: string;
  @Input() ch!: string;
  bc!: BroadcastChannel;

  constructor(/*private cd: ChangeDetectorRef*/) { }

  ngOnInit(): void {
    //window.addEventListener('loginEvent', this.login.bind(this), true);
    //console.log("Header:Added event listener");
    this.bc = new BroadcastChannel(this.ch);
    this.bc.onmessage = this.login;
  }

  login = (event: any) => {
    console.log(event);
    console.log("Header:login function: " + event.action + "-" + event.email + "-" + event.password);
    this.heading = !this.heading;
    this.email = event.email;
    this.password = event.password;
  }

  ngOnDestroy() {
    this.bc.close();
  }

}
