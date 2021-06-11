import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shell';
  bc!: BroadcastChannel;

  ngOnInit() {
    this.bc = new BroadcastChannel("map");
    window.addEventListener('pressEvent', this.stamp.bind(this), true);
  }


  stamp(e: any) {
    console.log(e);
  }
}
