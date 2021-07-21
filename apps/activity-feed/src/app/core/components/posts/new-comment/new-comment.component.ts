import { IPost, LinkRel } from '@activity-feed/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'activity-feed-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  text = '';
  @Input() post!: IPost;
  @Output() newComment = new EventEmitter();
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    const link = this.post?.actions?.find(link => link.rel === LinkRel.addComment);
    if(link) {
      this.linksService.xhr(link, { text: this.text }).subscribe(res => this.onNewComment(f));
    }
  }

  onNewComment(f: NgForm): void {
    f.resetForm();
    this.newComment.emit();
  }

}
