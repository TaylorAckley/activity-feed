import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialAuthState } from "./auth.state";
import * as authActions from './auth.actions';

export const authReducers = createReducer(
  initialAuthState,
  on(authActions.patchAuthState, (state, { newAuthState }) => ({
    ...state,
    newAuthState,
  })),
  on(authActions.setUser, (state, { user }) => ({
    ...state,
    user: {
      ...state.user, ...user
    },
    isAuthenticated: true
  })),
  );

  export function authReducer(state: AuthState | undefined, action: Action) {
    return authReducers(state, action);
  }
