import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() name?: string;


  onClick() {
    alert("Angular: è stato cliccato il pulsante " + this.name)
  }
}
