import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PostsService } from '../../../posts/posts/posts.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private postsService: PostsService) { }
  async canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp().getRequest();
    console.log(ctx.params);
    console.log(ctx.user);
    const id = ctx.params?.id ?? null;
    if(id) {
      const post = await this.postsService.findById(id);
      if(!post) return true;
      if(post && post.author.sub === ctx.user.sub) return true;
      return false;
    } else {
      return true;
    }
  }
}
