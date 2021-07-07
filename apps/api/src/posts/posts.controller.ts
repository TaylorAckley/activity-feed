import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from '@activity-feed/api-interfaces';
import { CustomRequest } from '../app/core/extensions/custom-request';

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Req() request: CustomRequest, @Body() createPostDto: CreatePostDto) {
    console.log(request.user);
    this.postsService.create(createPostDto);
    return { created: true };
  }

  @Get()
  fetchAll() {
    return {};
  }

}
