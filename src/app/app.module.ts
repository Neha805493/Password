// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Import other components, services, and modules as needed

@NgModule({
  declarations: [
    //AppComponent
    // Add other component declarations here
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // Add other module imports here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
