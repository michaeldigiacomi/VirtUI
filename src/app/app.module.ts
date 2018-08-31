import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

import { PagesModule } from './pages/pages.module';
import { SysinfoComponent } from './pages/sysinfo/sysinfo.component';
import { DomainlistComponent } from './pages/domainlist/domainlist.component';
import { DomainComponent } from './pages/domain/domain.component';

const routes: Routes = [
  { path: '', component: SysinfoComponent},
  { path: 'domainlist', component: DomainlistComponent },
  { path: 'domain/:id', component: DomainComponent}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
