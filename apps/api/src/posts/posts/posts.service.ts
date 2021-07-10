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
    return await createdPost.save();
  }

  async findById(id: string) {
    return await this.postModel.findById(id);
  }

  async deleteById(id: string) {
    return await this.postModel.deleteOne({  _id: id });
  }

  async fetchAll() {
    return await this.postModel.find().populate('author').sort({ createdAt: 1 });
  }
}
