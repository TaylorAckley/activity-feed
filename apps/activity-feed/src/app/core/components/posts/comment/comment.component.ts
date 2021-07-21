import { IComment } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'activity-feed-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: IComment;;
  constructor() { }

  ngOnInit(): void {
  }

}
