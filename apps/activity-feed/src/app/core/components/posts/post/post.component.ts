import { IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { LinksService } from '../../../services/links.service';
import { first } from 'rxjs/operators';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'activity-feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  faEllipsisV: faEllipsisV;
  @Input() post!: IPost;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
  }

  refetchSelf() {
    const link = this.post?.links?.find(link => link.rel === LinkRel.self);
    if (link) {
      this.linksService.dispatch(link).pipe(first()).subscribe((post: IPost) => this.post = post);
    }
  }

}

