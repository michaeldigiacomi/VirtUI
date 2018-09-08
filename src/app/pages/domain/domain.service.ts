import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private getDomInfourl = environment.VirshLibServer + 'api/Domain/';
  private updateDomainStateurl = environment.VirshLibServer + 'api/DomainState/';


  constructor(private http: HttpClient) {}

  getDomInfo(id): Observable<any> {
    return this.http.get<any>(this.getDomInfourl + id);
  }

  updateDomainState(id, state): Observable<any> {
    return this.http.get<any>(this.updateDomainStateurl + id + '/' + state);
  }
}
