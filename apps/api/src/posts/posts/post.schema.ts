import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/user.schema';
import { IPost } from '@activity-feed/api-interfaces';
import { LinkRel } from '../../app/models/link';
import { addActions, addLinks } from './decorate-post';

export type PostDocument = Post & Document;

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class Post implements IPost {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
  author: User;
  @Prop()
  text: string;
  @Prop()
  comments: Array<Post>;
  @Prop()
  likes: Array<User>;
  @Prop()
  isComment: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.virtual('links').get(function() {
  return addLinks(this);
});

PostSchema.virtual('actions').get(function() {
  return addActions(this);
})

PostSchema.set('toObject', { getters: true, virtuals: true });
PostSchema.set('toJSON', { getters: true, virtuals: true });
