import { Component, OnInit } from '@angular/core';
import { DomainlistService } from './domainlist.service';

@Component({
  selector: 'app-domainlist',
  templateUrl: './domainlist.component.html',
  styleUrls: ['./domainlist.component.css']
})
export class DomainlistComponent implements OnInit {

  public domainlistData: any;

  constructor(private svc: DomainlistService) {}

  ngOnInit() {
    this.svc.getDomList().subscribe(data => {
      this.domainlistData = data;
    });
  }
}
