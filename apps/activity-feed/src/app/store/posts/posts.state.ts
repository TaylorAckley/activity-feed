import { IPost } from "@activity-feed/api-interfaces";

export const initialPostsState: PostsState = {
  posts: [],
  loaded: false
}

export interface PostsState {
  posts: Array<IPost>;
  loaded: boolean;
}
