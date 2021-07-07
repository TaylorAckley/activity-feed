import { CreatePostDto } from '@activity-feed/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'activity-feed-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  text = '';
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {
   // this.auth.getAccessTokenSilently().subscribe(x => {
      console.log(f);
      //console.log(x);
      this.postsService.createPost({ text: this.text } as CreatePostDto).subscribe((res: any) => console.log(res))
  //  })

  }

}
