import { IPost, LinkRel } from '@activity-feed/api-interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { LinksService } from '../../../services/links.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'activity-feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  refetchSelf() {
    const link = this.post?.links?.find(link => link.rel === LinkRel.self);
    console.log(link);
    if (link) {
      this.linksService.dispatch(link).pipe(first()).subscribe((post: IPost) => this.post = post);
    }
  }

}

