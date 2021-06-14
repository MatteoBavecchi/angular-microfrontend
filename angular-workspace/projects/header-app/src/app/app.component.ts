import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() ch!: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('widget', { read: ViewContainerRef }) alertHost!: ViewContainerRef;

  generateWidget() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(WidgetComponent);
    const ref = this.alertHost.createComponent(factory);
    ref.instance.ch = this.ch;
  }

}
