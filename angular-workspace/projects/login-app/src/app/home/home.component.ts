import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homer',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {
  @Input() name?: string;


  onClick() {
    console.log("Angular: è stato cliccato il pulsante " + this.name);

    const data = {
      action: 'login'
    }
    const event = new CustomEvent('button_clicked', { detail: data });
    window.dispatchEvent(event);
  }
}
