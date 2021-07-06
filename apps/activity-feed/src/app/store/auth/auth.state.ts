import { User } from "@activity-feed/api-interfaces";

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {} as User,
  isAuthLoading: false,
  isAppLoading: false
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  isAuthLoading: boolean;
  isAppLoading: boolean;
}
