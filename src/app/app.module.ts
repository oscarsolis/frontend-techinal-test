// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

// modules
import { CoreModule } from '@core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    NgProgressRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
