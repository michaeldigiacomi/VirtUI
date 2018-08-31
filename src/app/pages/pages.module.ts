import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainlistComponent } from './domainlist/domainlist.component';
import { SysinfoComponent } from './sysinfo/sysinfo.component';
import { DomainComponent } from './domain/domain.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DomainlistComponent, SysinfoComponent, DomainComponent]
})
export class PagesModule { }
