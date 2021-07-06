import { Action, createReducer, on } from "@ngrx/store";
import { initialPostsState, PostsState } from "./posts.state";
import * as postActions from './posts.actions';

export const postsReducers = createReducer(
  initialPostsState,
  on(postActions.loadPosts, (state, { posts }) => ({
    ...state,
    posts,
  }))
  );


  export function postsReducer(state: PostsState | undefined, action: Action) {
    return postsReducers(state, action);
  }
