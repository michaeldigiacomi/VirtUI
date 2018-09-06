import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private url = environment.VirshLibServer + 'api/Domain/';

  constructor(private http: HttpClient) {}

  getDomInfo(id): Observable<any> {
    return this.http.get<any>(this.url + id);
  }
}
