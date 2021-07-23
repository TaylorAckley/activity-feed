import { CreatePostDto } from '@activity-feed/api-interfaces';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'activity-feed-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  text = '';
  @Output() newPost = new EventEmitter();

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if(!this.text) {
      return;
    }
      this.postsService.createPost({ text: this.text } as CreatePostDto).subscribe((res: any) => this.onNewPost(f))
  }

  onNewPost(f: NgForm) {
    f.resetForm();
    this.newPost.emit();
  }

}
