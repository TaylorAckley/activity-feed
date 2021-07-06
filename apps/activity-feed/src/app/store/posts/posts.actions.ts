import { createAction, props } from "@ngrx/store";
import { Post } from "./../../../../../../libs/api-interfaces/src/lib/api-interfaces";

export enum PostActions {
  LoadPosts = '[Posts] Load Posts',
}

export const loadPosts = createAction(PostActions.LoadPosts, props<{ posts: Array<Post> }>());
