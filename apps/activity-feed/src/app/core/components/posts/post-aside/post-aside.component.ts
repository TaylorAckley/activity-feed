import { IPost } from '@activity-feed/api-interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'activity-feed-post-aside',
  templateUrl: './post-aside.component.html',
  styleUrls: ['./post-aside.component.scss']
})
export class PostAsideComponent {
  @Input() post!: IPost;

}
