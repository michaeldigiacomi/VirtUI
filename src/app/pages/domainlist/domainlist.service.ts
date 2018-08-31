import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DomainlistService {

  private url = environment.VirshLibServer + 'api/domain';

  constructor(private http: HttpClient) {}

  getSysInfo(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
