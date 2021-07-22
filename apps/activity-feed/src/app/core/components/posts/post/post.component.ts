import { ILink, IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinksService } from '../../../services/links.service';
import { first } from 'rxjs/operators';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';;

@Component({
  selector: 'activity-feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  @Input() post!: IPost;
  @Output() deletedPost = new EventEmitter<IPost>();
  isUpdating = false;
  updateText!: string;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.updateText = this.post?.text;
  }

  refetchSelf() {
    const link = this.post?.links?.find(link => link.rel === LinkRel.self);
    if (link) {
      this.linksService.dispatch(link).pipe(first()).subscribe((post: IPost) => this.onPostRefetch(post));
    }
  }

  onPostRefetch(post: IPost) {
    this.post = post;
    this.isUpdating = false;
  }

  dispatch(link: ILink) {
    if(link.rel === LinkRel.updatePost) {
      this.isUpdating = true;
    } else {
      this.linksService.dispatch(link).subscribe(res => this.onDispatchResponse(link));
    }

  }

  onDispatchResponse(link: ILink) {
    if(link.rel !== LinkRel.deletePost) {
      this.refetchSelf();
    } else {
      this.deletedPost.emit(this.post);
    }
  }

  updatePost() {
    const link = this.post?.actions?.find(link => link.rel === LinkRel.updatePost);
    if (link) {
      this.linksService.dispatch(link, {  text: this.updateText }).pipe(first()).subscribe((post: IPost) => this.onUpdateSuccess(post));
    }
  }

  onUpdateSuccess(post: IPost) {
    this.refetchSelf();
  }

}

