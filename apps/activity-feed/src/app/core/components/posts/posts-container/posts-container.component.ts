import { IPost } from '@activity-feed/api-interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity-feed-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  posts: Array<IPost> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
