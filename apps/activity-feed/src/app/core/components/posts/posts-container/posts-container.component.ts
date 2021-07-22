import { IPost } from '@activity-feed/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'activity-feed-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  posts: Array<IPost> = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postsService.fetchAll().subscribe(posts => this.setPosts(posts))
  }

  setPosts(posts: IPost[]) {
    this.posts = posts;
  }
}
