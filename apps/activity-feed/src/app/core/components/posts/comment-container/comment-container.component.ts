import { IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { AppState } from 'apps/activity-feed/src/app/store';
import { selectAuthStateUser } from 'apps/activity-feed/src/app/store/auth/auth.selectors';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'activity-feed-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentContainerComponent implements OnInit, OnChanges {
  @Input() post!: IPost;
  @Output() refetch = new EventEmitter();
  faThumbsUp = faThumbsUp;
  isLiked = false;
  $userState = this.store.pipe(select(selectAuthStateUser));
  constructor(private linksService: LinksService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setIsLiked();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.post.currentValue) {
      this.post = changes.post.currentValue as IPost;
      this.setIsLiked();
    }
}

  setIsLiked() {
    this.$userState.subscribe(user => {
      this.isLiked = !!(this.post?.likes?.length && this.post.likes.find(like => like.sub === user.sub)) || false;
    });
  }

  handleLikeClick() {
    if(!this.isLiked) {
      this.likePost();
    } else {
      this.unlikePost();
    }
  }

  likePost() {
    const link = this.post.links?.find(l => l.rel === LinkRel.likePost);
    if(link) {
      this.linksService.dispatch(link).subscribe(res => this.emitRefetch())
    }
  }

  unlikePost() {
    const link = this.post.links?.find(l => l.rel === LinkRel.unlikePost);
    if(link) {
      this.linksService.dispatch(link).subscribe(res => this.emitRefetch())
    }
  }

  emitRefetch() {
    this.refetch.emit();
  }

  getLikeText() {
    if(this.post.flags?.hasLikes) {
      return `Liked by ${this.post?.likes?.length} people`
    } else {
      return 'Like Post'
    }
  }

}
function Ouput() {
  throw new Error('Function not implemented.');
}

