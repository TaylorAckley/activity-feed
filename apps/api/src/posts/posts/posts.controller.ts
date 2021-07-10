import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
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
  async fetchAll() {
    return await this.postsService.fetchAll();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postsService.findById(id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deleteById(id);
  }

}
