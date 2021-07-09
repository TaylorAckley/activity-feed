import { IPost } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'activity-feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post?: IPost = undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

}
