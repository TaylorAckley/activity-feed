import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from '../authz/authz.module';
import { Post, PostSchema } from './post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';



@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    AuthzModule,
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])
  ]
})
export class PostsModule { }
