import { IPost, HttpMethod, Link, LinkRel } from "@activity-feed/api-interfaces";

const API_URL = process.env.API_URL + "/api";
const APP_URL = process.env.APP_URL;

export function addLinks(post: IPost) {
  const links: Array<Link> = [];
  links.push(new Link(`${APP_URL}/posts/${post.id}`, LinkRel.page, HttpMethod.GET));
  links.push(new Link(`${API_URL}/posts/${post.id}`, LinkRel.self, HttpMethod.GET));
  links.push(new Link(`${API_URL}/posts/${post.id}/like`,LinkRel.likePost, HttpMethod.PATCH));
  links.push(new Link(`${API_URL}/posts/${post.id}/like`,LinkRel.unlikePost, HttpMethod.DELETE));
  if(!post.isComment) {
    links.push(new Link(`${API_URL}/posts/${post.id}/comments`,LinkRel.addComment, HttpMethod.POST));
  }
  return links;
}


export function addActions(post: IPost) {
  const actions: Array<Link> = [];
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.deletePost, HttpMethod.DELETE, 'Delete Post'));
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.updatePost, HttpMethod.PATCH, 'Update Post'));
  return actions;
}
