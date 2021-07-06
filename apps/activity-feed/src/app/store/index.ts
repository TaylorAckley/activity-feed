import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { authReducer } from "./auth/auth.reducer";
import { AuthState, initialAuthState } from "./auth/auth.state";
import { postsReducer } from "./posts/posts.reducer";
import { initialPostsState, PostsState } from "./posts/posts.state";

export const initialAppState: AppState = {
  auth: initialAuthState,
  posts: initialPostsState
}

export interface AppState {
  auth: AuthState,
  posts: PostsState
}

export const selectAppState = (state: AppState) => state;

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  posts: postsReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
