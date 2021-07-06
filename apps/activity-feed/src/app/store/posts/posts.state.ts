import { Post } from "@activity-feed/api-interfaces";

export const initialPostsState: PostsState = {
  posts: [],
  loaded: false
}

export interface PostsState {
  posts: Array<Post>;
  loaded: boolean;
}
