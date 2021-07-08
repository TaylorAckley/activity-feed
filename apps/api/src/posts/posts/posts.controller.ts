import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from '@activity-feed/api-interfaces';
import { CustomRequest } from '../../app/core/extensions/custom-request';

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Req() request: CustomRequest, @Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(request.user, createPostDto);

  }

  @Get()
  fetchAll() {
    return {};
  }

}
