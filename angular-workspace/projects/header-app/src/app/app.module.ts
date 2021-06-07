import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const headerApp = createCustomElement(AppComponent, { injector: this.injector });//Guarda
    customElements.define('app-header', headerApp);

    const headerWidgetApp = createCustomElement(WidgetComponent, { injector: this.injector });//Guarda
    customElements.define('app-header-widget', headerWidgetApp);
  }

  ngDoBootstrap() { }
}
