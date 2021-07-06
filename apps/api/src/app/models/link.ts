export interface ILink {
  rel: LinkRel;
  href: string;
}

export class Link implements ILink {
  rel: LinkRel;
  href: string;
}

export enum LinkRel {
  page = 'page',
  self = 'self',
  addReply = 'addReply',
  edit = 'edit'
}
