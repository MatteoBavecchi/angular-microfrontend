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

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    window.addEventListener('button_clicked', this.login, true);
    console.log("Header:Added event listener");
  }

  login = () => {
    console.log("Header:login function");
    this.heading = !this.heading;
    console.log(this.heading);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    window.removeEventListener('button_clicked', this.login, true);
  }
}
