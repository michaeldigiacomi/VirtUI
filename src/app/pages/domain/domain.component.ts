import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainService } from './domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  public domainoData: any;
  public DomainID = this.route.snapshot.paramMap.get('id');

  public ManageDomain = function(State) {
    this.svc.updateDomainState(this.DomainID, State).subscribe(data => {
      if (data.Result === 'Success') {
        this.ngOnInit();
      }
    });
  };

  constructor(private svc: DomainService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.svc.getDomInfo(this.DomainID).subscribe(data => {
      this.domainoData = data;
    });
  }
}
