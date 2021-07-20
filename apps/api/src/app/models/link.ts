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
