import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  //@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  @Prop()
  author: string;
  @Prop()
  text: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
