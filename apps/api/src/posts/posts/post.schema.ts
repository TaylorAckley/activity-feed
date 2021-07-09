import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/user.schema';
import { IPost } from '@activity-feed/api-interfaces';
import { LinkRel } from '../../app/models/link';

export type PostDocument = Post & Document;

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class Post implements IPost {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
  author: User;
  @Prop()
  text: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.virtual('links').get(() => {
  return [{ href: "http://", rel: LinkRel.self  }]
});

PostSchema.virtual('actions').get(() => {
  return [{ href: "http://", rel: LinkRel.self  }]
})

PostSchema.set('toObject', { getters: true, virtuals: true });
PostSchema.set('toJSON', { getters: true, virtuals: true });
