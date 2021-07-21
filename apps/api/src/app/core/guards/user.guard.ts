import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PostsService } from '../../../posts/posts/posts.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private postsService: PostsService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const args = context.getArgs();
    console.log(args);
    const ctx = context.switchToHttp().getRequest();
    console.log(ctx.params);
    console.log(ctx.user);
    const id = ctx.params?.id ?? null;
    if(id) {
      return this.postsService.findById(id).map(post => {
        if(post && post.user.sub === ctx.user.sub) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return true;
    }
  }
}
