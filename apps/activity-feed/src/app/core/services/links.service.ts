import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILink } from '@activity-feed/api-interfaces';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  /** Dispatch Stub
   *  In a real world, this would be switch like dictionary lookup on the LinkRel and handle as needed.
   *  However we only need to do XHR calls so we simply call the XHR function.
   *
   */
  dispatch(link: ILink, payload?: any) {
    return this.xhr(link, payload);
  }

  /** XHR
   * Use the provided link to call the API.
   */
  xhr(link: ILink, payload?: any): Observable<any> {
    return this.http.request(link.httpMethod, link.href, payload ? { body: payload } : {})
  }
}
