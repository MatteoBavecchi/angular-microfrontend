import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-marker',
  templateUrl: './text-marker.component.html',
  styleUrls: ['./text-marker.component.css']
})
export class TextMarkerComponent implements OnInit {
  @Input() lat!: string;
  @Input() lon!: string;
  @Output() pressEvent = new EventEmitter<{ lat: string, lon: string }>();
  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    console.log("Emitted event: data:" + { lat: this.lat, lon: this.lon });
    this.pressEvent.emit({ lat: this.lat, lon: this.lon });
  }

}
