import { IUser } from '@activity-feed/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async upsertUser(user: IUser) {
    return await this.userModel.findOneAndUpdate({  sub: user.sub }, user, {  upsert: true, new: true });
  }

  async findUser(searchString: string) {
    return await this.userModel.findOne({  $or: [ { _id: searchString }, {  email: searchString }, {  sub: searchString }   ] })
  }

}
