import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ILink, LinkRel } from '@api/models/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  dispatch(link: ILink, payload?: any) {
    return this.xhr(link, payload);
  }

  xhr(link: ILink, payload?: any) {
    return this.http.request(link.href, link.httpMethod, payload ? {  body: payload } : {});
  }
}
