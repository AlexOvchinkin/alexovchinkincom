import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RoutingModule } from './routing.module';

import { jwtInterceptor } from './classes/jwt-interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PipesModule } from './modules/pipes/pipes.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'alex-ov' }),
    RoutingModule,
    HttpClientModule,
    PipesModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: jwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
