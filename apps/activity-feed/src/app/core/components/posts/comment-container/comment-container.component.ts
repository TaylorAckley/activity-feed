import { IPost } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'activity-feed-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {
  @Input() post!: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
