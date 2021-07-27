import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateCommentDto, CreatePostDto, UpdateCommentDto, UpdatePostDto } from '@activity-feed/api-interfaces';
import { CustomRequest } from '../../app/core/extensions/custom-request';
import { UserGuard } from '../../app/core/guards/user.guard';
import { TransformPostInterceptor } from '../../app/core/extensions/transform-post';

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseInterceptors(TransformPostInterceptor)
  @Get()
  async fetchAll() {
    return await this.postsService.fetchAll();
  }

  @UseInterceptors(TransformPostInterceptor)
  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postsService.findById(id);
  }

  @Post()
  async create(@Req() request: CustomRequest, @Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(request.user, createPostDto);

  }

  @UseGuards(UserGuard)
  @Patch(':id')
  async updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postsService.updateById(id, updatePostDto);
  }

  @UseGuards(UserGuard)
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deleteById(id);
  }

  @Post(':id/comments')
  async createComment(@Param('id') id: string, @Req() request: CustomRequest, @Body() createCommentDto: CreateCommentDto) {
    return await this.postsService.createComment(id, request.user, createCommentDto);
  }

  @Patch(':id/comments/:commentId')
  async updateComment(@Param('id') id: string, @Param('commentId') commentId: string, @Body() updateCommentDto: UpdateCommentDto) {
    return await this.postsService.updateComment(id, commentId, updateCommentDto);
  }

  @Delete(':id/comments/:commentId')
  async deleteComment(@Param('id') id: string, @Param('commentId') commentId: string) {
    return await this.postsService.deleteComment(id, commentId);
  }

  @Patch(':id/like')
  async likePost(@Param('id') id: string, @Req() request: CustomRequest) {
    return await this.postsService.likePost(id, request.user);
  }

  @Delete(':id/like')
  async unlikePost(@Param('id') id: string, @Req() request: CustomRequest) {
    return await this.postsService.unlikePost(id, request.user);
  }
}
function TransformInterceptor(TransformInterceptor: any) {
  throw new Error('Function not implemented.');
}

