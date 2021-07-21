export interface IUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
}

export interface IBaseFeedItem {
  _id?: any;
  id?: string;
  text: string;
  author?: IUser;
  likes?: Array<IUser>;
  isComment?: boolean;
  links?: Array<ILink>;
  actions?: Array<ILink>;
  metadata?: IMetadata;
}

export type IComment = IBaseFeedItem;

export interface IPost extends IBaseFeedItem {
  comments: Array<IComment>;
};

interface IBaseDto {
  id: string;
}

interface IBasePostDto {
  text: string;
  author?: IUser;
}

export interface ILink {
  rel: LinkRel;
  href: string;
  httpMethod: HttpMethod;
}

export class Link implements ILink {
  rel: LinkRel;
  href: string;
  httpMethod: HttpMethod;

  constructor(href: string, rel: LinkRel, httpMethod: HttpMethod) {
    this.href = href;
    this.rel = rel;
    this.httpMethod = httpMethod;
  }

}

export enum LinkRel {
  page = 'page',
  self = 'self',
  likePost = 'likePost',
  unlikePost = 'unlikePost',
  deletePost = 'deletePost',
  updatePost = 'updatePost',
  addComment = 'addComment',
}

// Auto-generated code from Copilot:
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}


export type CreatePostDto = IBasePostDto;

export type CreateUserDto = IBaseDto;

export type CreateCommentDto = IBaseDto & IBasePostDto;

export type UpdateCommentDto = IBaseDto & IBasePostDto;

export interface IMetadata {
  createdAt: Date;
  updatedAt: Date;
}
