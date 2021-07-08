import { IUser } from "@activity-feed/api-interfaces";

export interface CustomRequest extends Request {
  user: IUser;
}
