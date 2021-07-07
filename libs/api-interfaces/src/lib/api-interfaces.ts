export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface Post {
  text: string;
}

export interface CreatePostDto {
  text: string;
}
