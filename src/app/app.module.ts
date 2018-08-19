import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // replaced for Universal
    // BrowserModule
    BrowserModule.withServerTransition({ appId: 'alex-ov' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
