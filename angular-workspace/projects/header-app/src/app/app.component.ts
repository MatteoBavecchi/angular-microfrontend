import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('widget', { read: ViewContainerRef }) alertHost!: ViewContainerRef;

  generateWidget() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(WidgetComponent);
    const ref = this.alertHost.createComponent(factory);
   // ref.changeDetectorRef.detectChanges();

  }


}
