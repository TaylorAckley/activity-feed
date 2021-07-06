import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create() {
    return {};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  fetchAll() {
    return {};
  }

}
