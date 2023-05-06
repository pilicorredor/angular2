import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppInfo2Component } from './app-info2/app-info2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInfoComponent,
    AppInfo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
