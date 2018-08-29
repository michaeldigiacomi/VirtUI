import { Component, OnInit } from '@angular/core';
import { SysinfoService } from './sysinfo.service';


@Component({
  selector: 'app-sysinfo',
  templateUrl: './sysinfo.component.html',
  styleUrls: ['./sysinfo.component.css']
})
export class SysinfoComponent implements OnInit {

  public sysInfoData: any;

  constructor(private svc: SysinfoService) {}

  ngOnInit() {
    this.svc.getSysInfo().subscribe(data => {
      this.sysInfoData = data;
    });
  }

}
