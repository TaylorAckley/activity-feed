import { createAction, props } from "@ngrx/store";
import { IPost } from "@activity-feed/api-interfaces";

export enum PostActions {
  LoadPosts = '[Posts] Load Posts',
}

export const loadPosts = createAction(PostActions.LoadPosts, props<{ posts: Array<IPost> }>());
