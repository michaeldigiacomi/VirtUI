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

  constructor(private svc: DomainService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.svc.getDomInfo(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.domainoData = data;
    });

  }

}
