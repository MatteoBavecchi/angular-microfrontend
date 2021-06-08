import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-marker',
  templateUrl: './text-marker.component.html',
  styleUrls: ['./text-marker.component.css']
})
export class TextMarkerComponent implements OnInit {
  @Input() lat!: string;
  @Input() lon!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
