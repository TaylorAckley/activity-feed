export interface IUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
}

export interface IPost {
  _id?: any;
  id?: string;
  text: string;
  author?: IUser;
  likes: Array<unknown>;
  comments: Array<unknown>;
  isComment: boolean;
}

interface IBaseDto {
  id: string;
}

interface IBasePostDto {
  text: string;
  author?: IUser;
}

export type CreatePostDto = IBasePostDto;

export type CreateUserDto = IBaseDto;

export type CreateCommentDto = IBaseDto & IBasePostDto;

export type UpdateCommentDto = IBaseDto & IBasePostDto;
