import { IPost, HttpMethod, Link, LinkRel, IUser, IPostFlags } from "@activity-feed/api-interfaces";

const API_URL = process.env.API_URL + "/api";
const APP_URL = process.env.APP_URL;

export function decoratePost(post: IPost, user: IUser): IPost {
  post = addFlags(post, user);
  post = addLinks(post);
  post = addActions(post, user);
  return post;
}

function addLinks(post: IPost): IPost {
  const links: Array<Link> = [];
  links.push(new Link(`${APP_URL}/posts/${post.id}`, LinkRel.page, HttpMethod.GET));
  links.push(new Link(`${API_URL}/posts/${post.id}`, LinkRel.self, HttpMethod.GET));
  links.push(new Link(`${API_URL}/posts/${post.id}/like`,LinkRel.likePost, HttpMethod.PATCH));
  links.push(new Link(`${API_URL}/posts/${post.id}/like`,LinkRel.unlikePost, HttpMethod.DELETE));
  if(!post.isComment) {
    links.push(new Link(`${API_URL}/posts/${post.id}/comments`,LinkRel.addComment, HttpMethod.POST));
  }
  post.links = links;
  return post;
}


function addActions(post: IPost, user: IUser): IPost {
  const actions: Array<Link> = [];
  if(post.flags.isOwner) {
    actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.deletePost, HttpMethod.DELETE, 'Delete Post'));
    actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.updatePost, HttpMethod.PATCH, 'Update Post'));
  }
  post.actions = actions;
  return post;
}

function addFlags(post: IPost, user: IUser): IPost {
  post.flags = {
    edited: post.metadata.updatedAt > post.metadata.createdAt,
    hasLikes: post.likes.length > 0,
    hasComments: post.comments.length > 0,
    isOwner: user.sub === post.author.sub
  }
  return post;
}


