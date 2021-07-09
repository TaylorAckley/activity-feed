import { Injectable } from '@angular/core';
import { CreatePostDto, IPost } from '@activity-feed/api-interfaces';
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

  fetchAll() {
    return this.http.get<IPost[]>(`${environment.apiUrl}/posts`);
  }
}
