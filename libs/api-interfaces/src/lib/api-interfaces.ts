export interface IUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
}

export interface IPost {
  text: string;
  author?: IUser;
}

export interface CreatePostDto {
  text: string;
  author: IUser;
}

export interface CreateUserDto {
  id: string;
}
