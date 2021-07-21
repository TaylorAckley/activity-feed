import { IPost, HttpMethod, Link, LinkRel } from "@activity-feed/api-interfaces";

const API_URL = process.env.API_URL + "/api";
const APP_URL = process.env.APP_URL;

export function addLinks(post: IPost) {
  const links: Array<Link> = [];
  links.push(new Link(`${APP_URL}/posts/${post.id}`, LinkRel.page, HttpMethod.GET));
  links.push(new Link(`${API_URL}/posts/${post.id}`, LinkRel.self, HttpMethod.GET));
  return links;
}


export function addActions(post: any) {
  const actions: Array<Link> = [];
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.self, HttpMethod.GET));
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.deletePost, HttpMethod.DELETE));
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.updatePost, HttpMethod.PATCH));
  actions.push(new Link(`${API_URL}/posts/${post.id}`,LinkRel.likePost, HttpMethod.PATCH));
  if(!post.isComment) {
    actions.push(new Link(`${API_URL}/posts/${post.id}/comments`,LinkRel.addComment, HttpMethod.POST));
  }
  return actions;
}