import { IPost } from '@activity-feed/api-interfaces';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'activity-feed-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  animations: [
      trigger('flyInOut', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX(-100%)' }),
          animate(250)
        ]),
        transition('* => void', [
          animate(250, style({ transform: 'translateX(100%)' }))
        ])
      ])
    ]
})
export class FeedComponent implements OnInit {

  @Input() posts: IPost[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDeletePost(deletedPost: IPost) {
    console.log(deletedPost);
    this.posts = this.posts.filter(p => p.id !== deletedPost.id);
  }

}
