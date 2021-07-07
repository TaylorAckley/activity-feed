import { Injectable } from '@angular/core';
import { CreatePostDto } from '@activity-feed/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createPost(createPostDto: CreatePostDto) {
    return this.http.post(`${environment.apiUrl}/posts`, createPostDto);
  }
}
