import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SysinfoComponent } from './sysinfo/sysinfo.component';
import { UiModule } from './ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: SysinfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SysinfoComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, UiModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
