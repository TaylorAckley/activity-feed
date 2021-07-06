import { Post } from '@activity-feed/api-interfaces';
import faker from 'faker';
import { Mongoose, connect, Schema, model } from 'mongoose';
import * as dotenv from 'dotenv';


class PostSeedFactory {
  seeds = 10;
 constructor() {
   dotenv.config();
 }

  async generate() {

    const schema = new Schema<Post>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String
    });

    // 3. Create a Model.
    const PostModel = model<Post>('Post', schema);


    const seedPosts = [];
    await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    for(let i = 0; i++; i < this.seeds) {
      const post: Post = {
        text: faker.lorem,

      }
      seedPosts.push(post);
    }
  }

}
