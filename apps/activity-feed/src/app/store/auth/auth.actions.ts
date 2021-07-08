import { createAction, props } from "@ngrx/store";
import { IUser } from "@activity-feed/api-interfaces";
import { AuthState } from "./auth.state";

export enum AuthActions {
  PatchAuthState = '[Auth] Patch Auth State',
  SetUser = '[Auth] Set User',
}

export const patchAuthState = createAction(AuthActions.PatchAuthState, props<{ newAuthState: AuthState }>());
export const setUser = createAction(AuthActions.SetUser, props<{ user: IUser }>());
