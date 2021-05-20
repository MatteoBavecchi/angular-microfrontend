import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'loginApp';
}
