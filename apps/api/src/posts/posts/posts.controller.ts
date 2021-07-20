import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateCommentDto, CreatePostDto, UpdateCommentDto } from '@activity-feed/api-interfaces';
import { CustomRequest } from '../../app/core/extensions/custom-request';

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async fetchAll() {
    return await this.postsService.fetchAll();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postsService.findById(id);
  }

  @Post()
  async create(@Req() request: CustomRequest, @Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(request.user, createPostDto);

  }

  @Patch(':id')
  async updatePost(@Param('id') id: string) {
    return await this.postsService.updateById(id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deleteById(id);
  }

  @Post(':id/comments')
  async createComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return await this.postsService.createComment(id, createCommentDto);
  }

  @Patch(':id/comments/:commentId')
  async updateComment(@Param('id') id: string, @Param('commentId') commentId: string, @Body() updateCommentDto: UpdateCommentDto) {
    return await this.postsService.updateComment(id, commentId, updateCommentDto);
  }

  @Delete(':id/comments/:commentId')
  async deleteComment(@Param('id') id: string, @Param('commentId') commentId: string) {
    return await this.postsService.deleteComment(id, commentId);
  }

  @Patch(':id/likes')
  async likePost(@Param('id') id: string) {
    return await this.postsService.likePost(id);
  }

  @Delete(':id/likes')
  async unlikePost(@Param('id') id: string) {
    return await this.postsService.unlikePost(id);
  }



}
