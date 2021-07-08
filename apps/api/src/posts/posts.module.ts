import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './posts/post.schema';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { User, UserSchema } from './users/user.schema';
import { UsersService } from './users/users.service';



@Module({
  controllers: [PostsController],
  providers: [PostsService, UsersService],
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class PostsModule { }
