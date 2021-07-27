import { ILink, IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinksService } from '../../../services/links.service';
import { first } from 'rxjs/operators';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';;

@Component({
  selector: 'activity-feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  faEllipsisV = faEllipsisV;
  @Input() post!: IPost;
  @Output() deletedPost = new EventEmitter<IPost>();
  isUpdating = false;
  constructor(private linksService: LinksService) { }

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
}

