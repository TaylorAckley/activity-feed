import { createSelector } from '@ngrx/store';
import { AppState, selectAppState } from '..'
import { AuthState } from './auth.state';

export const selectAuthState = createSelector(
  selectAppState,
  (state: AppState) => state.auth
);

/** Select the user object returned from the API */
export const selectAuthStateUser = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.user
);
