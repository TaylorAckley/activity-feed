import { IUser } from "@activity-feed/api-interfaces";

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {} as IUser,
  isAuthLoading: false,
  isAppLoading: false
}

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser;
  isAuthLoading: boolean;
  isAppLoading: boolean;
}
