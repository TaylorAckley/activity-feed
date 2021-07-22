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
  flags?: IPostFlags;
}

export interface IPostFlags {
  edited: boolean;
  hasLikes: boolean;
  hasComments: boolean;
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
  label?: string;
}

export class Link implements ILink {
  rel: LinkRel;
  href: string;
  httpMethod: HttpMethod;
  label?: string;

  constructor(href: string, rel: LinkRel, httpMethod: HttpMethod, label?: string) {
    this.href = href;
    this.rel = rel;
    this.httpMethod = httpMethod;
    if(label) {
      this.label = label;
    }

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

export type UpdatePostDto = IBasePostDto;

export type CreateUserDto = IBaseDto;

export type CreateCommentDto = IBaseDto & IBasePostDto;

export type UpdateCommentDto = IBaseDto & IBasePostDto;

export interface IMetadata {
  createdAt: Date;
  updatedAt: Date;
}
