import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/user.schema';
import { IBaseFeedItem, IComment, IPost } from '@activity-feed/api-interfaces';

/** Base Schema */

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class BaseSchema implements IBaseFeedItem {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
  author: User;
  @Prop()
  text: string;
  @Prop()
  likes: Array<User>;
  @Prop({ default: false })
  isComment: boolean;
}

/** Comment Schema */

export type CommentDocument = Comment & Document;

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class Comment extends BaseSchema implements IComment {
  @Prop({ default: true })
  isComment: boolean;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

CommentSchema.set('toObject', { getters: true, virtuals: true });
CommentSchema.set('toJSON', { getters: true, virtuals: true });

/** Post Schema */

export type PostDocument = Post & Document;

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class Post extends BaseSchema implements IPost {
  @Prop({  type: [CommentSchema], default: [] })
  comments: [Comment];
  @Prop({ default: false })
  isComment: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.set('toObject', { getters: true, virtuals: true });
PostSchema.set('toJSON', { getters: true, virtuals: true });
