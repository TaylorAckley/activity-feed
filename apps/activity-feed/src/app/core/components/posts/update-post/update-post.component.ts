import { IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { first } from 'rxjs/operators';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'activity-feed-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  @Input() post!: IPost;
  @Output() updatedPost = new EventEmitter<IPost>();
  updateText!: string;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.updateText = this.post?.text;
  }

  updatePost() {
    const link = this.post?.actions?.find(link => link.rel === LinkRel.updatePost);
    if (link) {
      this.linksService.dispatch(link, {  text: this.updateText }).pipe(first()).subscribe((post: IPost) => this.onUpdateSuccess(post));
    }
  }

  onUpdateSuccess(post: IPost) {
    this.updatedPost.emit();
  }

}
