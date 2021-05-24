import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnDestroy {

  heading?: boolean = false;
  email?: string;
  password?: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    window.addEventListener('loginEvent', this.login.bind(this), true);
    console.log("Header:Added event listener");
  }

  login = (event: any) => {
    console.log("Header:login function: " + event.detail.action + "-" + event.detail.email + "-" + event.detail.password);
    this.heading = !this.heading;
    this.email = event.detail.email;
    this.password = event.detail.password;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    window.removeEventListener('loginEvent', this.login, true);
  }
}
