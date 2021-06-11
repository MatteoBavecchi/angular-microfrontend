import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-marker',
  templateUrl: './text-marker.component.html',
  styleUrls: ['./text-marker.component.css']
})
export class TextMarkerComponent implements OnInit {
  @Input() lat!: string;
  @Input() lon!: string;
  @Input("channel_id") channelId!: string;
  //@Output() pressEvent = new EventEmitter<{ lat: string, lon: string }>();

  broadcastChannel!: BroadcastChannel;
  constructor() { }

  ngOnInit(): void {
    //this.broadcastChannel = new BroadcastChannel(this.channelId);
    //console.log("Created a channel:" + this.channelId)
      this.broadcastChannel = new BroadcastChannel("markers");
    console.log("Created a channel:" + "markers")
  }

  onPress() {
    console.log("Emitted event on channel 'markers': data:" + { lat: this.lat, lon: this.lon });
    this.broadcastChannel.postMessage({ lat: this.lat, lon: this.lon });
  }

}
