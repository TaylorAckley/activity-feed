import { IUser } from '@activity-feed/api-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({  timestamps: {  createdAt: 'metadata.createdAt', updatedAt: 'metadata.updatedAt' }})
export class User implements IUser {
  @Prop()
  sub: string;
  @Prop()
  email: string;
  @Prop()
  name: string;
  @Prop()
  picture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
