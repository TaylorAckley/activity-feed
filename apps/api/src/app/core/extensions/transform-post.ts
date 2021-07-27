import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { decoratePost } from './../../../posts/posts/decorate-post';
import { map } from 'rxjs/operators';


@Injectable()
export class TransformPostInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(posts => {
      const ctx = context.switchToHttp().getRequest();
      if(Array.isArray(posts)) {
        const transformedPosts = posts.map(post => decoratePost(post.toObject(), ctx.user));
        return transformedPosts;
      } else {
        return decoratePost(posts.toObject(), ctx.user);
      }
    }));
  }
}
