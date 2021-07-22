import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto, IUser } from '@activity-feed/api-interfaces';
import { UsersService } from '../users/users.service';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>, private usersService: UsersService) {}

  async create(author: IUser, createPostDto: CreatePostDto) {
    const user = await this.usersService.upsertUser(author);
    const createdPost = new this.postModel(createPostDto);
    createdPost.author = user;
    createdPost.isComment = false;
    return await createdPost.save();
  }

  async findById(id: string) {
    return await this.postModel.findById(id).populate('author').populate('comments.author');
  }

  async deleteById(id: string) {
    return await this.postModel.deleteOne({  _id: id });
  }

  async fetchAll() {
    return await this.postModel.find().populate('author').populate('comments.author').sort({ 'metadata.createdAt': -1 });
  }
  async likePost(id: string, user: IUser) {
    const post = await this.postModel.findById(id);
    const liker = await this.usersService.upsertUser(user);
    if(!post.likes.find(like => like.sub === liker.sub)) {
      post.likes.push(liker);
      return await post.save();
    }
    return Promise.resolve({ message: 'not modified' });
  }

  async unlikePost(id: string, user: IUser) {
    const post = await this.postModel.findById(id);
    if(post.likes.length && post.likes.find(like => like.sub === user.sub)) {
      post.likes =  post.likes.filter(like => like.sub !== user.sub);
      return await post.save();
    }
    return Promise.resolve({ message: 'not modified' });
  }

  async createComment(id: string, author: IUser, createCommentDto: any) {
    const user = await this.usersService.upsertUser(author);
    const createdComment = new this.postModel(createCommentDto);
    createdComment.author = user;
    createdComment.isComment = true;
    const post = await this.postModel.findById(id);
    post.comments.push(createdComment);
    return await post.save();
  }
  async updateById(id: string, updatePostDto: any) {
    const post = await this.postModel.findById(id);
    post.text = updatePostDto.text;
    return await post.save();
  }

  updateComment(id: string, commentId: string, updateCommentDto: any) {
    throw new Error('Method not implemented.');
  }
  deleteComment(id: string, commentId: string) {
    throw new Error('Method not implemented.');
  }

}
