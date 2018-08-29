import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SysinfoComponent } from './sysinfo/sysinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    SysinfoComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
